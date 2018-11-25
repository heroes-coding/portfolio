import React from 'react'
import Nav from '../../containers/nav'
import styles from './layout.module.scss'

const Layout = props =>
  <div id='content' className='container-fluid'>
    {true && <Nav />}
    <div className='row justify-content-center'>
      <div id={styles.body}>
        {props.children}
      </div>
    </div>
  </div>

export default Layout
