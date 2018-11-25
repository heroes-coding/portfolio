import React, { Component } from 'react'
import styles from './portfolio.module.scss'

const PortfolioItem = ({ image, title, description, githubLink, githubText, linkText, link }) =>
  <div className={styles.portfolioItem}>
    <div className={styles.cardHolder}>
      <div className={styles.pItemImageHolder}>
        <img src={image} alt={title} />
      </div>
    </div>
    <div className={styles.infoHolder}>
      <div className={styles.pItemTitle}>{title}</div>
      <div className={styles.pItemDescription}>{description}</div>
      <a href={githubLink} className={styles.pItemGithub}>{githubText}</a>
      {link && <a href={link} className={styles.pItemLink}>{linkText}</a>}
    </div>
  </div>

class Portfolio extends Component {
  render () {
    return (
      <div className='row'>
        <div id={styles.portfolioTitle}>
          The following contains some personal projects
          as well as assessments done during Cook System's
          Fast Track'D program.  You can also <a href='https://github.com/heroes-coding' alt='Github link'>
          check out my Github account here.</a>
        </div>
        <div id={styles.portfolioHolder}>

          <PortfolioItem
            image='/images/heroes-report.png'
            title='Heroes.report'
            description='The front-end for all kinds of Heroes of the Storm statistics.  Written with React, Redux, D3.js, and Web Assembly (Rust and C++)'
            githubLink='https://github.com/heroes-coding/Heroes-Report'
            githubText='Front end Github link'
            link='https://heroes.report'
            linkText='Heroes.report live site'
          />
          <PortfolioItem
            image='/images/cl.jpg'
            title='Craigs List Job Aggregator'
            description='A private job aggregator for all tech jobs on Craigslist across America.  Front-end done in React & Electron.  Back end done with an Express API and a Rust scraper / data extractor'
            githubLink='https://github.com/heroes-coding/jobsviewer'
            githubText='Github link'
          />
          <PortfolioItem
            image='/images/student-equity.jpg'
            title='Simple Survey System'
            description='A survey creation, provision, and summary data viewer written with React, D3.js, and Google Firebase'
            githubLink='https://github.com/heroes-coding/Survey-System'
            githubText='Github link'
            link='https://studentequity.herokuapp.com/'
            linkText='Survey live link'
          />
          <PortfolioItem
            image='/images/java-pico.jpg'
            title='SmartShare'
            description='A multi-threaded file management server written in Java / JAXB / PostgreSQL exposed to users on the command line (using PicoCLI)'
            githubLink='https://github.com/cooksystemsinc/java-assessment-smart-share-heroes-coding'
            githubText='Github link'
          />
          <PortfolioItem
            image='/images/java-boot.jpg'
            title='Social Media'
            description='A Twitter-like rest API with (re)tweets, feeds, followers, hashtags, and mentions utilizing Spring, Spring Boot, and Hibernate'
            githubLink='https://github.com/cooksystemsinc/java-assessment-smart-share-heroes-coding'
            githubText='Github link'
          />
          <PortfolioItem
            image='/images/dev-duel.png'
            title='Dev Duel'
            description='A simple vanilla javascript / html / css retro-styled web application with an Express API for comparing Github developer portfolios'
            githubLink='https://github.com/cooksystemsinc/js-assessment-dev-duel-heroes-coding'
            githubText='Github link'
          />
        </div>
      </div>
    )
  }
}

export default Portfolio
