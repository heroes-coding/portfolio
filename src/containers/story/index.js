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
            xRatio = {800}
            yRatio = {3000}
            xOffset = {0}
            events={[
              {
                date: Date.parse('28 Nov 1980'),
                name: 'Born in Chicago, IL'
              },
              {
                date: Date.parse('25 Dec 1984'),
                name: 'Moved to Washington, DC with Mom and my brother'
              },
              {
                date: Date.parse('1 Jun 1985'),
                name: 'Moved to Falls Church, VA, where I would spend my childhood (summers in Indy)'
              },
              {
                date: Date.parse('25 Dec 1986'),
                name: 'Got first game system.  Fell in love with video games'
              },
              {
                date: Date.parse('25 Dec 1987'),
                name: 'Started soccer, which I would play until football in high school'
              },
              {
                date: Date.parse('01 Jul 1994'),
                name: 'Studied math over summer to skip ahead two grades',
                icon: '&#xf1ec;'
              },
              {
                date: Date.parse('01 Nov 1995'),
                name: 'Created a game in Basic'
              },
              {
                date: Date.parse('01 Mar 1996'),
                name: 'Started running track for a few years'
              },
              {
                date: Date.parse('01 Nov 1996'),
                name: 'Began to wrestle for the next four years'
              },
              {
                date: Date.parse('01 Jun 1997'),
                name: 'Gained 40 pounds in a summer and started playing football for several years'
              },
              {
                date: Date.parse('01 Nov 1997'),
                name: 'Lost 30 pounds for wrestling, a cycle that would continue'
              },
              {
                date: Date.parse('09 Jan 1999'),
                name: 'Started UVA, studying classes I was interested in'
              },
              {
                date: Date.parse('01 Mar 2000'),
                name: 'Added Anthropology as a major'
              },
              {
                date: Date.parse('01 Jun 2001'),
                name: 'Studied Korean for the summer, which led to me spending more time studying Chinese than my majors'
              },
              {
                date: Date.parse('01 Jan 2001'),
                name: 'Added Economics as a major'
              },
              {
                date: Date.parse('01 May 2003'),
                name: 'Finished UVA but stayed for a Chinese-learning waiter for a year during SARS'
              },
              {
                date: Date.parse('01 Jul 2004'),
                name: 'Joined a teaching program in Shenzhen and started my 12 year journey in China'
              },
              {
                date: Date.parse('01 Jan 2005'),
                name: 'Started a blog which I worked on for several years (along with a few other site ideas)'
              },
              {
                date: Date.parse('01 Jul 2005'),
                name: 'Started an custom apparel export business with a friend'
              },
              {
                date: Date.parse('01 Oct 2005'),
                name: 'Met my future wife'
              },
              {
                date: Date.parse('01 Oct 2006'),
                name: 'Moved to Shanghai to work as an automotive electronics sales rep'
              },
              {
                date: Date.parse('01 Mar 2007'),
                name: 'Worked on a mod for Dragon Age, as well as studying tons of investing and Austrian Economics'
              },
              {
                date: Date.parse('01 Jun 2008'),
                name: 'Moved back to Shenzhen and got married'
              },
              {
                date: Date.parse('01 Aug 2008'),
                name: 'Started teaching at Reading Town, where I would be working until 2016'
              },
              {
                date: Date.parse('01 Jan 2010'),
                name: 'Started working on an iOS game, Lulu\'s adventures, with help from wife'
              },
              {
                date: Date.parse('05 Jan 2014'),
                name: 'Saw my daughter brought into this world'
              },             
              {
                date: Date.parse('01 Aug 2014'),
                name: 'Started my graduate degree in Financial Economics at Peking University\'s HSBC Business School'
              },
              {
                date: Date.parse('01 Dec 2014'),
                name: 'Learned and became quite good at R on my own (while working and going to school full time)'
              },
              {
                date: Date.parse('01 Jun 2016'),
                name: 'Started learning Python and PostgreSQL by building a stats program'
              },
              {
                date: Date.parse('01 Dec 2016'),
                name: 'Moved back to America after 12 years!'
              },
              {
                date: Date.parse('01 Mar 2017'),
                name: 'Built the first version of Heroes.report with in-browser parsing of replays, deployed via AWS services, looked for work'
              },
              {
                date: Date.parse('01 Jan 2018'),
                name: 'Rebuilt Heroes.report with React and WebAssembly, continued to look for work'
              },
              {
                date: Date.parse('01 Oct 2018'),
                name: 'Started Cook System\'s Fast Track\'D program; took my broad set of programming skills to a more professional level'
              },
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
