import React from 'react'
import Link from 'gatsby-link'
import styles from './Courses.module.css'
import Container from './'

import {
  sncLavalin,
  sqlImg,
  jsImg,
  matlabImg,
  cssImg,
  cImg,
  cppImg,
  fccImg,
  edxImg,
  htmlImg,
  drexelImg,
  pyImg
} from '../images/tech'

import { chevronBlack } from '../images'

let marginY = 0
let destination = 0
let speed = 20
let scroller = null

const toTop = elementId => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY -= speed
  if (marginY <= 0) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

const CourseItem = props => {
  const iconImg = props.iconImg

  return (
    <div className={`${styles.card} jsCard`}>
      <div className={`${styles.additional} jsCardContent`}>
        <div className={styles.userCard}>
            <div className={styles.courseTopContainer}>
              <img src={props.logo} />
            </div>
            <div className={styles.linksContainer}>
              <a href={props.githubUrl} target="_blank">
                github
              </a>
            </div>
        </div>
        <div className={styles.moreInfo}>
              <ul>
                {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
              </ul>
        </div>  
      </div>
      <div className={styles.general}>
        <h3>{props.courseName}</h3>
        <h5>{props.courseInfo}</h5>
        <h4>{props.shortDesc}</h4>
        <div class="stats">
        </div>
        <div className={styles.stats}>
          {iconImg
            ? iconImg.map(image => <img src={image} alt="" />)
            : 'loading...'}
        </div>
        <span className={styles.more}>Mouse over the card for more info</span>
      </div>
    </div>
  )
}

export default () => (
  <div id="courses" className={styles.courseSection}>
    <div className={styles.courseBar}>
      <h1>#include &lt;coursework.h&gt;</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCourseCard`}>
      <div className={styles.cdTimelineContainer}>
        <CourseItem
          id="cs50"
          courseName="CS50x: Introduction to Computer Science"
          courseInfo="edX, Harvard University"
          shortDesc="An entry-level programming course that teaches how to think algorithmically and solve problems efficiently."
          descriptions={[ 'Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.',
            'Languages include C, Python, SQL, and JavaScript plus CSS and HTML.',
            '8 Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.'
          ]}
          githubUrl="https://github.com/mai-codes/CS50x---Introduction-to-Computer-Science"
          logo={edxImg}
          iconImg={[cImg, pyImg, sqlImg, jsImg, htmlImg, cssImg]} 
        />

        <CourseItem
          id="mit"
          courseName="MIT6.00.1x: Introduction to CS & Programming with Python"
          courseInfo="edx, Massachusetts Institute of Technology"
          shortDesc="A course that teaches how to think computationally and write programs to tackle useful problems in Python."
          descriptions={[
            'Topics include computation, algorithms, testing & debugging, algorithmic complexity, data structures, and object oriented programming.',
            'This 9 week long course includes 5 problem sets.',
          ]}
          githubUrl="https://github.com/mai-codes/MITx-6.00.1x"
          logo={edxImg}
          iconImg={[pyImg]} 
        />
        <CourseItem
          id="fcc"
          courseName="freeCodeCamp.org (currently in progress)"
          courseInfo="A free, non-profit community that teaches how to code. "
          shortDesc="Completed the Responsive Web Design Certification (300 hours)."
          descriptions={["Currently working through the Javascript Algorithms and Data Structures Certification (300 hours).",
            'Aiming to complete all certifications.',
          ]}
          logo={fccImg}
          iconImg={[jsImg, cssImg, htmlImg]}
          />    

        <CourseItem
          id="drexel course"
          courseName="Dynamics of Structures Using MATLAB"
          courseInfo="CIVE T880, Drexel University"
          shortDesc="This graduate level course focuses on analysis of dynamic response of complex structures using MATLAB"
          descriptions={["Topics include linear and nonlinear dynamic response of complex structures, wave propagation techniques, and advanced computational methods in structural analysis.",
          ]}
          logo={drexelImg}
          iconImg={[matlabImg]}        
          />
      </div>
    </section>
  </div>
)
