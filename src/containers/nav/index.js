import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './nav.module.scss'
import layoutStyles from '../../hoc/layout/layout.module.scss'
import Typing from 'react-typing-animation'
import { TimelineMax, TweenMax } from "gsap/TweenMax"
window.TweenMax = TweenMax
window.tl = new TimelineMax()

class Nav extends Component {
  state = {
    navActive: false,
    navOffScreen: false,
    animationOff: true
  }
  hideNav = () => {
    if (this.state.navOffScreen || this.state.animationOff) {
      return
    }
    this.setState({navOffScreen: true}, this.hideNav)
    TweenMax.to([`#${styles.navHolder}`,`#${layoutStyles.body}`], 1, {y:-window.$(`#${styles.skyHolder}`).height()}) 
  }
  showNav = () => {
    if (!this.state.navOffScreen || this.state.animationOff) {
      return
    }
    this.setState({navOffScreen: false}, this.hideNav)
    TweenMax.to([`#${styles.navHolder}`,`#${layoutStyles.body}`], 1, {y:0})
  }
  NavButton = ({text, icon, link}) => 
    <NavLink 
      to={link}
      activeClassName={styles.active}
      className={styles.navButton}
      onClick={this.hideNav}
    >
      <div className={styles.navButtonText}>{text}</div>
      <div className={styles.navButtonIcon}><i className={`${icon}`}/></div>
    </NavLink>
  render() {
    return (
        <div id={styles.navHolder}>
          <div id={styles.skyHolder} className="row justify-content-center">
            <div id={styles.header} className="col-12">
              Data Driven Full Stack Developer
            </div>
            <div id={styles.subHeader} className="col-12">
              I strive to learn and implement more efficient ways to make things
            </div>
            <div className="row col-12 col-lg-10 col-xl-8 justify-content-center" id={styles.consoleHolder}>
              <div id={styles.console} className={`col-12 col-md-7`}>
                <div className={styles.consoleText}>
                  <Typing speed={25} onFinishedTyping={() => {
                    this.setState({ navActive: true }, 
                      () => TweenMax.from(`.${styles.navButton}`, 2, {opacity: 0})
                    )
                  }}>
                    > <Typing.Delay ms={1000} />cat intro.txt
                    <Typing.Delay ms={50} />
                    <Typing.Speed ms={1} />
                    <p>Hey! My name is Jeremy.</p>

                    <p>I am a full stack developer.</p>

                    <p>This site shows a bit of my story and work.</p>

                    <p>Please select from the following buttons.</p>
                    <p>> <Typing.Delay ms={1000} /><Typing.Speed ms={25} />node navigation.js</p>
                  </Typing>
                </div>
              </div>
              <div id={styles.consoleNav} className="col-12 col-md-5" style={{visibility: this.state.navActive ? "visible" : "hidden"}}>
                <this.NavButton
                  text="About Me / My Story"
                  icon="fas fa-book-open"
                  link="/story"
                />
                <this.NavButton
                  text="Portfolio / Github"
                  icon="fas fa-folder"
                  link="/portfolio"
                />
                <this.NavButton
                  text="Resume"
                  icon="fas fa-file"
                  link="/resume"
                />
              </div>
            </div>
          </div>
          <div id={styles.divider} onClick={this.showNav} className="row justify-content-center"></div>
        </div>
    );
  }
}

export default Nav;
