import React from 'react'
import Nav from '../../containers/nav'
import styles from './layout.module.scss'

const Layout = props =>
  <div id='content' className='container-fluid'>
    <Nav />
    <div id={styles.divider} className="row justify-content-center"></div>
    <div className='row justify-content-center'>
      <div id={styles.body}>
        {props.children}
      </div>
    </div>
  </div>

export default Layout
