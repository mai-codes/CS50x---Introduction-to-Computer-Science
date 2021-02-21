import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.css'

import { email, linkedin, github } from '../images/footer'

const Footer = () => (
  <div className={styles.imgsContainer}>
        <div className={styles.foot}>
      <h3>© Designed and coded with <span id="heart">&#10084;</span> by Maissoun Ksara</h3>
    </div>
    <a href="mailto:maissounksara@gmail.com?subject=HELLO!">
      <img src={email} className={styles.iconImg} />
    </a>
    <a href="https://www.linkedin.com/in/maissounksara/" target="_blank">
      <img src={linkedin} className={styles.iconImg} />
    </a>
    <a href="https://github.com/mai-codes" target="_blank">
      <img src={github} className={styles.iconImg} />
    </a>
  </div>
)

export default Footer
