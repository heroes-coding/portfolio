import React, { Component } from 'react'
import styles from './story.module.scss'
import { getStoryIntro } from '../../helpers'
import Timeline from './timeline'

class Story extends Component {
  state = {
    storyIntro: ''
  }
  componentDidMount() {
    getStoryIntro().then(storyIntro => {
      console.log(storyIntro)
      storyIntro = storyIntro.split("\n").map((p,i) => <p key={i}>{p}</p>)
      this.setState({ storyIntro })
    })
  }
  render () {
    return (
      <div id={styles.storyHolder}>
        <div className={styles.title}>About me / My Story </div>
        <div className={styles.storyText}>{this.state.storyIntro}</div>
        <div className={styles.timelineHolder}>
          <Timeline
            startDate = {Date.parse('28 Nov 1980')}
            endDate = {new Date()}
            xRatio = {500}
            yRatio = {3000}
            xOffset = {0}
            minorEvents={[

            ]}
            turningPoints={[

            ]}
          >
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Story
