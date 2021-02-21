import React from 'react'
import Link from 'gatsby-link'

import styles from './Resume.module.css'
import Container from './'

import {
  sncLavalin,
  structuralImg,
  lordabbettImg,
  drexelLogo,
  pipingImg,
  bankImg,
  fundImg,
  diplomaImg,
} from '../images/resume'

import { chevronBlack } from '../images'

import { maissounresume } from '../../Ksara_Maissoun_Resume.pdf'

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

const ResumeItem = props => {
  return (
    <div className={`${styles.cdTimelineBlock} jsCdBlock`}>
      <div
        className={`${styles.cdTimelineImg} ${
          styles.cdTimelineImgPicture
        } jsCdImg`}
      >
        <img src={props.timelineIcon} alt="Picture" />
      </div>
      <div className={`${styles.cdTimelineContent} jsCdContent`}>
        <div className={styles.wrapCollabsible}>
          <input id={props.id} className={styles.toggle} type="checkbox" />
          <label htmlFor={props.id} className={styles.lblToggle}>
            <div className={styles.jobTopContainer}>
              <h4>{props.jobTitle}</h4>
              <img src={props.logo} />
            </div>
            <h5>{props.department}</h5>
            <h5>{props.group}</h5>
          </label>

          <div className={styles.collapsibleContent}>
            <div className={styles.contentInner}>
              <ul>
                {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
              </ul>
            </div>
          </div>
          <span className={styles.cdTimelineDate}>{props.dates}</span>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="resume" className={styles.resumeSection}>
    <div className={styles.resumeBar}>
      <h1>#include &lt;experience.h&gt;</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCdTimeline`}>
      <div className={styles.tapForDetails}>
        <span>tap card for details</span>
      </div>
      <div className={styles.cdTimelineContainer}>
        <ResumeItem
          id="snclavalin"
          companyName="SNC-Lavalin"
          jobTitle="Process/Mechanical Engineer"
          department="Power, Grid & Industrial Solutions"
          group="Infrastructure"
          dates="Oct 2019 - Present"
          descriptions={[ 'Providing design solutions and assessments for new, updated and modified process systems, structures and components',
            'Preparing and reviewing design documents and plant modifications in accordance with approved procedures, processes and design requirements for Industrial Manufacturing Facilities',
            'Completely redesigned Royal Canin Lebanon, TN pet food manufacturing facility in 3 months while remaining under-budget and tight project schedule',
            'Utilizing BIM technology to model equipment in 3D, coordinate between disciplines through clash detections, and generate equipment/building layouts',
            'Performed 3D laser scanning on several facilities and generated a point-cloud to be used in building models'
          ]}
          siteUrl="https://www.snclavalin.com/en"
          logo={sncLavalin}
          timelineIcon={pipingImg}
        />

        <ResumeItem
          id="snclavalin2"
          companyName="SNC-Lavalin"
          jobTitle="Structural Engineer"
          department="Power, Grid & Industrial Solutions"
          group="Infrastructure"
          dates="Sept 2018 - Oct 2019"
          descriptions={[
            'Performing structural analysis design of steel, reinforced concrete, and masonry structures for large multi-story industrial/ manufacturing facilities in the agro, pharma, and chemical industries',
            'Designing structures including building structure, platforms, pipe racks/bridges, foundations',  
            'Developing design calculations for lateral and gravity loads in accordance with ASCE/SEI 7-10, IBC, and ACI',
            'Mentored new-hires and interns on best practices, software training, and company standards',
            'Utilized BIM software including Autodesk Revit, Navisworks, ReCap, and markups using Bluebeam'
          ]}
          siteUrl="https://www.snclavalin.com/en"
          logo={sncLavalin}
          timelineIcon={structuralImg}
        />

        <ResumeItem
          id="drexel"
          companyName="Drexel University"
          jobTitle="Bachelor of Science & Master of Science"
          department="Structural Engineering, College of Engineering"
          group="Magna Cum Laude, 3.8 GPA"
          dates="June 2018"
          descriptions={["Achieved Dean's List for the entirety of degree",
            'Significantly involved in Society of Women Engineers collegiate & regional chapters',
            'Vice-President of American Society of Civil Engineers collegiate chapter'
        
          ]}
          logo={drexelLogo}
          timelineIcon={diplomaImg}
        />
      </div>
    </section>
  </div>
)
