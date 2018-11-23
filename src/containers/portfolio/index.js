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
      <div className="row">
        <div id={styles.portfolioTitle}>
          The following contains some personal projects 
          as well as assessments done during Cook System's 
          Fast Track'D program.  You can also <a href="https://github.com/heroes-coding" alt="Github link">
          check out my Github account here.</a>
        </div>
        <div id={styles.portfolioHolder}>
          
          <PortfolioItem
            image="/images/heroes-report.png"
            title="Heroes.report"
            description="The front-end for all kinds of Heroes of the Storm statistics.  Written with React, Redux, D3.js, and Web Assembly (Rust and C++)"
            githubLink="https://github.com/heroes-coding/Heroes-Report"
            githubText="Heroes.report front end Github repo"
            link="https://heroes.report"
            linkText="Heroes.report live site"
          />
        </div>
      </div>
    )
  }
}

export default Portfolio
