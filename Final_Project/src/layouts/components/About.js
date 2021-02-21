import React from 'react'
import styles from './About.module.css'

import { maissoun } from '../images'
import { maissoun1 } from '../images'

import { concert, realmadrid, plane } from '../images/extra'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMeContainer}>
      {/* <div className={styles.avatar}>
      <div className={styles.background}></div>
      {/* <div class={styles.background-hide}></div>
        <div className={styles.head}>
          <div className={styles.hairpiece_back1}></div>
          <div className={styles.hairpiece_back2}></div>
          <div className={styles.hairpiece_back3}></div>
          <div className={styles.hairpiece_back4}></div>
          <div className={styles.hairpiece_back5}></div>
          <div className={styles.hairpiece_back6}></div>
          <div className={styles.hairpiece_back7}></div>
          <div className={styles.hairpiece_back8}></div>
          <div className={styles.hairpiece_back9}></div>
          <div className={styles.hairpiece_back10}></div>
          <div className={styles.hairpiece_back11}></div>
          <div className={styles.hairpiece_back12}></div>
          <div className={styles.hairpiece_back13}></div>
          <div className={styles.hairpiece_back14}></div>
          <div className={styles.hairpiece_back15}></div>
          <div className={styles.hairpiece_back16}></div>
          <div className={styles.hair_back17}></div>
          <div className={styles.eyebrows}></div>
          <div className={styles.eyes}></div>
          <div className={styles.nose}></div>
          <div className={styles.mouth}></div>
        </div>
      <div className={styles.neck}></div>
      <div className={styles.body}></div>
      <div className={styles.arm_right}></div>
      <div className={styles.arm_left}></div>
      <div className={styles.animate}>
          <div className={styles.arm_left_wave}></div>
          <div className={styles.hand}></div>
      </div>
      </div> */}

        <div className={styles.aboutPhoto}> 
          <img src={maissoun1} alt="" />
        </div> 

      <div className={styles.aboutText}>
        <div className={styles.csstyping}>
        <h4>Hey there, I'm <span>Maissoun! </span>I have a B.S & M.S in Structural Eng from Drexel U. </h4>
        <h4>After designing buildings for 2 years, my urge to dive into tech grew strong. </h4>
        <h4>I've decided to switch paths and focus on growing as a programmer.</h4>
        <h4>I <span id="heart">&#10084;</span> technology and creating innovative solutions to everyday problems!</h4>
        </div>

        <div className={styles.techStack}>
          <div>
            <h3>Technical Software Skills</h3>
            <h4>C • Python • JavaScript • ReactJS • GatsbyJS • HTML5 • CSS3 • SQLlite • MATLAB</h4>
          </div>
          <div>
            <h3>Engineering Design</h3>
            <h4>Adobe Ps & Ai • Autodesk Revit/AutoCAD/ReCap • Microsoft Office Suite</h4>
          </div>
        </div>

      </div>

    </div>
  </div>
) 

export default About