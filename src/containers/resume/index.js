import React, { Component } from 'react'
import styles from './resume.module.scss'

class Resume extends Component {
  render () {
    return (
      <div id={styles.docsHolder}>
        <div id={styles.resumeLinkHolder}>
          Below is my current resume.  You can also <a href="https://docs.google.com/document/d/e/2PACX-1vRae_Ta_QYXFPHpB014fA_9X2JnUc2mAMM9rdlF-gtVSfuPEH-qIa6OJZ1FRztJFRmsy1UnXnr8T0O-/pub">
          view or download a better formatted version on Google Docs.</a>
        </div>
        <iframe title="Resume" id={styles.resumeIFrame} src="https://docs.google.com/document/d/e/2PACX-1vRae_Ta_QYXFPHpB014fA_9X2JnUc2mAMM9rdlF-gtVSfuPEH-qIa6OJZ1FRztJFRmsy1UnXnr8T0O-/pub?embedded=true"></iframe>
      </div>
    )
  }
}

export default Resume
