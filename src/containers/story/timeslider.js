import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import './timeslideroverrides.scss'
import React from 'react'
import Tooltip from 'rc-tooltip'
import Slider from 'rc-slider'

const Handle = Slider.Handle
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls='rc-slider-tooltip'
      overlay={value}
      visible={dragging}
      placement='top'
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const wrapperStyle = { width: 1000, margin: 50 }
const TimelineSlider = ({ startYear, updateStartYear }) =>
  <div>
    <div style={wrapperStyle}>
      <Slider min={1980} max={2018} defaultValue={startYear} handle={handle} onAfterChange={updateStartYear} />
    </div>
  </div>

export default TimelineSlider
