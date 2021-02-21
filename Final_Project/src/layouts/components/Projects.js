import React from 'react'
import Link from 'gatsby-link'
import styles from './Projects.module.css'
import Container from './'

import { evoHaxMockup, sweshareMockup, theListeningRoomMockup, websiteMockup } from '../images/projects'

import { chevronBlack } from '../images'

import {
  reactImg,
  bootstrapImg,
  firebaseImg,
  googlemapsImg,
  herokuImg,
  nodeImg,
  postgresqlImg,
} from '../images/tech'

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

const Project = props => {
  const techImgs = props.techImgs

  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <div className={styles.projectname}>
          <h2>{props.projectname}</h2>
        </div>
        <div className={styles.projectdesc}>
          <h3>{props.projectdesc}</h3>
        </div>
        <div className={styles.contentInner}>
          <ul>
              {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles.mockupAndLinks}>
        <div className={styles.mockupContainer}>
          <img src={props.mockup} className={styles.mockup} alt="" />
          {/* <div className={styles.mockupOverlay}>
            <div className={styles.techStack}>
              {techImgs
                ? techImgs.map(image => <img src={image} alt="" />)
                : 'Tech stack loading...'}
            </div>
          </div> */}
        </div>
        <div className={styles.linksContainer}>
          <a href={props.githubUrl} target="_blank">
            github
          </a>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="projects" className={styles.projectsSection}>
    <div className={styles.projectsBar}>
      <h1>#include &lt;projects.h&gt;</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <div className={styles.projectsContainer}>
      <Project
        projectname="evoHax Hackathon: 1st Place Winner"
        projectdesc="Augmented Speech-reader and Bluetooth module."
        mockup={evoHaxMockup}
        descriptions={["A portable voice recognition device augmented with bluetooth that converts speech to text to desktop and web commands.",
        "Written in C++ and Python to interface with the free, open source, text to speech reader Non-visual Desktop Access (NVDA) to enable two way, hands free, audio communication between the user and various functions on their computer from opening an application to selectively reading a web page.",
        "The automation of searching commands like control + F to find relevant content eliminates any need for manual keyboard and mouse input. "
        ]}
        githubUrl="https://github.com/mai-codes/evoHax-nvda"
        // techImgs={[reactImg, firebaseImg, nodeImg, googlemapsImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="FemmeHacks Hackathon: 2nd Place Winner"
        projectdesc="SWEShare Goal Share Web Application."
        mockup={sweshareMockup}
        descriptions={["An application aimed to help Drexel’s Society of Women Engineers organize its schedule and tasks.",
        "Written in Python using Django framework. Includes scripts written in Javascript and HTML/CSS.",
        "The application enabled SWE members to post their goals and get matched with other members or mentors with similar goals in order to help them reach that goal through collaboration."
        ]}
        githubUrl="https://github.com/mai-codes/FemmeHacks-SWEApp2015"
        // techImgs={[reactImg, nodeImg, postgresqlImg, bootstrapImg, herokuImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="HP21 Calculator Clone"
        projectdesc="*in progress*"
        mockup={theListeningRoomMockup}
        descriptions={["Developed a clone of the HP21 calculator.",
          "Written in C# and XAML."
        ]}
        siteUrl="https://symbalplayer.firebaseapp.com/"
        githubUrl="https://github.com/TheListeningRoom/the-listening-room"
        // techImgs={[reactImg, firebaseImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Personal Web Portfolio"
        projectdesc="*in progress*"
        mockup={websiteMockup}
        descriptions={["I developed this personal web portfolio to display my skills and resume.",
        "This is a ReactJS application written in Javascript using GatsbyJS web framework. Incorporates HTML & CSS."
        ]}
        siteUrl="https://grace-card.firebaseapp.com/"
        githubUrl="https://github.com/nrl240/grace-card"
        // techImgs={[reactImg, firebaseImg]}
      />
    </div>
  </div>
)

