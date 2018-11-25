import React from 'react'
import styles from './timeline.module.scss'
import * as d3 from 'd3'
window.d3 = d3

class Timeline extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { startDate, endDate, events, xRatio, yRatio } = this.props
    const xOffset = xRatio / 2 + 5
    const yPadding = yRatio * 0.01

    const oneYear = 1000 * 60 * 60 * 24 * 365
    const startYear = startDate - startDate % oneYear
    const yScale = d3.scaleLinear().domain([startYear, endDate]).range([0 + yPadding, yRatio - yPadding])

    // start year isn't exactly the beginning of a year.  Adding a month to make sure I get the right year
    const startYearRounded = new Date(startYear + oneYear / 12).getFullYear()
    const yearCount = Math.floor((endDate - startYear) / oneYear)
    const yearTicks = []
    for (let y = 0; y <= yearCount; y++) {
      yearTicks.push({
        time: startYear + y * oneYear,
        loc: yScale(startYear + y * oneYear),
        label: startYearRounded + y
      })
    }
    const svgStyle = {
      height: `${yRatio}pt`,
      width: `${xRatio}pt`
    }

    return (
      <svg
        className={styles.timelineSVG}
        viewBox={`0 0 ${xRatio} ${yRatio}`}
        preserveAspectRatio='xMinYMin meet'
        style={svgStyle}
      >
        {yearTicks.map(({ loc, label }) =>
          <g key={label}>
            <line x1={xOffset - 5} y1={loc} x2={xOffset} y2={loc} className={styles.tick} />
            <text x={5} y={loc + 15} className={styles.tickText}>{label}</text>
            <line x1={0} y1={loc} x2={xRatio} y2={loc} className={styles.tickLine} />
          </g>
        )}
        {events.map(({ date, name, icon }, i) =>
          <g key={name}>
            <text x={xOffset} y={yScale(date)} className={styles.eventText}>
              {name}

              <svg><use xlinkHref='./icons/calculator-solid.svg' /></svg>
              {icon && <tspan className={styles.bigIcon}>&#xf0c0;</tspan>}
              <foreignObject height={50} width={50}><div xmlns='http://www.w3.org/1999/xhtml'>HI!</div></foreignObject>
            </text>
          </g>
        )}
      </svg>
    )
  }
}

export default Timeline
