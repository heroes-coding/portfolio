import React, { Component } from 'react'
import styles from './story.module.scss'
import { getStoryIntro } from '../../helpers'
import Timeline from './timeline'
import * as icons from './icons'


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
        <div className={styles.title}>
          About me / My Story 
        </div>
        <div id={styles.headshotHolder}>
          <img id={styles.headshot} src="/Profile.png" alt="My headshot" />
        </div>
        
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
                name: 'Born in Chicago, IL, spent some years near Indy',
                icon: icons.childIcon
              },
              {
                date: Date.parse('25 Dec 1984'),
                name: 'Moved to DC with Mom and my brother',
                icon: icons.moveIcon
              },
              {
                date: Date.parse('1 Jun 1985'),
                name: 'Moved to Falls Church, VA, where I would spend my childhood (summers in Indy)',
                icon: icons.moveIcon
              },
              {
                date: Date.parse('25 Dec 1986'),
                name: 'Got first game system.  Fell in love with video games',
                icon: icons.gameIcon
              },
              {
                date: Date.parse('25 Dec 1987'),
                name: 'Started soccer, which I would play until football in high school',
                icon: icons.soccerIcon
              },
              {
                date: Date.parse('01 Jul 1994'),
                name: 'Studied math over summer to skip ahead two grades',
                icon: icons.mathIcon
              },
              {
                date: Date.parse('01 Nov 1995'),
                name: 'Created a simple game in Basic',
                icon: icons.codeIcon
              },
              {
                date: Date.parse('01 Mar 1996'),
                name: 'Started running track for a few years',
                icon: icons.runIcon
              },
              {
                date: Date.parse('01 Nov 1996'),
                name: 'Began to wrestle for the next four years',
                icon: icons.circleIcon
              },
              {
                date: Date.parse('01 Jun 1997'),
                name: 'Gained 40 pounds to start playing football (played for the rest of high school)',
                icon: icons.footballIcon
              },
              {
                date: Date.parse('01 Nov 1997'),
                name: 'Lost 30 pounds for wrestling, a cycle that would continue',
                icon: icons.scaleIcon
              },
              {
                date: Date.parse('09 Jan 1999'),
                name: 'Started at UVA, pursuing ideas I was interested in',
                icon: icons.universityIcon
              },
              {
                date: Date.parse('01 Mar 2000'),
                name: 'Added Anthropology as a major',
                icon: icons.peopleIcon
              },
              {
                date: Date.parse('01 Jun 2001'),
                name: 'Studied Korean for the summer, after which I poured myself into Chinese',
                icon: icons.travelTeachIcon
              },
              {
                date: Date.parse('01 Jan 2001'),
                name: 'Added Economics as a major',
                icon: icons.graphIcon
              },
              {
                date: Date.parse('01 May 2003'),
                name: 'Finished UVA but stayed as a Chinese-learning waiter for a year during SARS',
                icon: icons.gradIcon
              },
              {
                date: Date.parse('01 Jul 2004'),
                name: 'Joined a teaching program in Shenzhen and started my 12 year journey in China',
                icon: icons.travelTeachIcon
              },
              {
                date: Date.parse('01 Nov 2004'),
                name: 'Started a blog which I worked on for several years (along with a few other site ideas)',
                icon: icons.blogIcon
              },
              {
                date: Date.parse('15 Mar 2005'),
                name: 'Scored a 6 (almost a 7) on the HSK, China\'s national test for Chinese',
                icon: icons.languageIcon
              },
              {
                date: Date.parse('01 Jul 2005'),
                name: 'Started a custom apparel export business with a friend',
                icon: icons.tradeIcon
              },
              {
                date: Date.parse('01 Oct 2005'),
                name: 'Met my future wife',
                icon: icons.loveIcon
              },
              {
                date: Date.parse('01 Oct 2006'),
                name: 'Moved to Shanghai to work as an automotive electronics sales rep',
                icon: icons.cogDudeIcon
              },
              {
                date: Date.parse('01 Mar 2007'),
                name: 'Worked on a mod for Dragon Age, as well as studying tons of investing and Austrian Economics',
                icon: icons.codeLearnerIcon
              },
              {
                date: Date.parse('01 Jun 2008'),
                name: 'Moved back to Shenzhen and got married',
                icon: icons.marriageMoveIcon
              },
              {
                date: Date.parse('01 Oct 2008'),
                name: 'Started teaching at Reading Town, where I would be working until 2016',
                icon: icons.teacherIcon
              },
              {
                date: Date.parse('01 Jan 2010'),
                name: 'Started working on an iOS game, Lulu\'s adventures, with help from wife',
                icon: icons.gameDesignIcon
              },
              {
                date: Date.parse('05 Jan 2014'),
                name: 'Saw my daughter brought into this world',
                icon: icons.childIcon
              },             
              {
                date: Date.parse('01 Aug 2014'),
                name: 'Started my graduate degree in Financial Economics at Peking University\'s HSBC Business School',
                icon:  icons.universityIcon
              },
              {
                date: Date.parse('01 Dec 2014'),
                name: 'Learned and became quite good at R on my own (while working and going to school full time)',
                icon:  icons.rIcon
              },
              {
                date: Date.parse('01 Jun 2016'),
                name: 'Started learning Python and PostgreSQL by building a stats program',
                icon:  icons.pythonCodeIcon
              },
              {
                date: Date.parse('01 Dec 2016'),
                name: 'Moved back to America after 12 years!',
                icon:  icons.americasIcon
              },
              {
                date: Date.parse('01 Mar 2017'),
                name: 'Built the first version of Heroes.report with AWS and in browser parsing, looked for work',
                icon:  icons.firstSiteIcon
              },
              {
                date: Date.parse('01 Jan 2018'),
                name: 'Rebuilt Heroes.report with React and WebAssembly, continued to look for work',
                icon:  icons.secondSiteIcon
              },
              {
                date: Date.parse('01 Oct 2018'),
                name: 'Started Cook System\'s Fast Track\'D program to become a professional',
                icon:  icons.cookIcon
              },
            ]}
          >
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Story
