import React from 'react'
import {
  StyledVerticalTimeline,
  StyledVerticalTimelineElement,
  StyledSubVerticalTimelineElement,
  StyledLink,
  StyledP,
} from './VerticalTimelineElements'
import 'react-vertical-timeline-component/style.min.css'
import { colorPallet } from '../../assets/ColorPallet'
import {
  TiSocialYoutube,
  TiCodeOutline,
  TiVendorAndroid,
  TiMortarBoard,
  TiInputChecked,
  TiInfo,
  TiGroupOutline,
} from 'react-icons/ti'
import { GiRoad, GiPodiumWinner } from 'react-icons/gi'
import { FaWordpressSimple } from 'react-icons/fa'
import { SiAdobexd } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

const VerticalTimelineComponent = () => {
  return (
    <StyledVerticalTimeline>
      {/* Redundancy started */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--self-study'
        date='April 2020'
        iconStyle={{ background: colorPallet.accent, color: '#fff' }}
        icon={<GiRoad />}>
        <h3 className='vertical-timeline-element-title'>My Journey Begins!</h3>
        <StyledP>
          After being made redundant, I picked myself up and set off to find new
          horizons.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* KKS.fi */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--self-study'
        date='April 2020'
        iconStyle={{ background: colorPallet.accent, color: '#fff' }}
        icon={<FaWordpressSimple />}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://www.kuopionkiipeilyseura.fi/'
            target='_blank'
            aria-label='kuopion kiipeily seura'>
            Kuopionkiipeilyseura.fi
          </StyledLink>
        </h3>
        <StyledP>
          Designed a website for the Kuopion kiipeily seura. using Wordpress and
          Elementor
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* Freecodecamp.com - C# */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--self-study'
        date='May 2020'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        icon={<TiCodeOutline />}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://www.codecademy.com/learn/learn-c-sharp'
            target='_blank'
            aria-label='Code Academy'>
            CodeAcademy.com - Learn C#
          </StyledLink>
        </h3>
        <StyledP>
          My first taste of code came in the form of a 30 hour learn c# course.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* Youtube course - Android Developement */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--self-study'
        date='June 2020'
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<TiSocialYoutube />}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://www.youtube.com/watch?v=fis26HvvDII'
            target='_blank'
            aria-label='Youtube'>
            Youtube - Beginner Android Dev
          </StyledLink>
        </h3>
        <StyledP>
          I wanted to code something more tangeble than c# console apps, so I
          tried my hand at android development.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* Android dev masterclass - Java */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--self-study'
        date='July 2020'
        iconStyle={{ background: 'green', color: '#fff' }}
        icon={<TiVendorAndroid />}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://courses.meicode.org/courses/android2020'
            target='_blank'
            aria-label='Meicode'>
            Android Developement Masterclass
          </StyledLink>
        </h3>
        <StyledP>
          I learned the basics quickly and purchased a android masterclass.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* H2C starts */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--h2c-head'
        date='October 2020'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentArrowStyle={{
          borderRight: `7px solid ${colorPallet.primary}`,
        }}
        icon={<TiMortarBoard />}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://h2c.fi/'
            target='_blank'
            aria-label='Highway 2 code'>
            Highway 2 code - Starts
          </StyledLink>
        </h3>

        <StyledP>
          6 month bootcamp run by centria university with the focus of training
          fullstack web developers.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* H2C - Fundamentals of Programming */}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-element'
        iconStyle={{
          background: colorPallet.primary,
          color: '#fff',
        }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>
          Fundamentals of Programming
        </h3>
        <StyledP>
          Computational thinking, problems solving and basic algorithms
        </StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - C# Programming*/}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-element'
        iconStyle={{
          background: colorPallet.primary,
          color: '#fff',
        }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>C# Programming</h3>
        <StyledP>More C# practice</StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - Web Development */}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-element'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>Web Development</h3>
        <StyledP>
          Concepts of web development, like front-end, backend, HTML/CSS/JS and
          REST.
        </StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - Agile */}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-element'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>Agile Frameworks</h3>
        <StyledP>Overview of Agile, Scrum and other frameworks</StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - UX/UI */}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-element'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>UX/UI</h3>

        <StyledP>
          6 month bootcamp run by centria university with the focus of training
          fullstack web developers.
        </StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - GGULIVRR competition */}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--h2c-fullstack-starts'
        date='October 2020'
        iconStyle={{ background: colorPallet.accent, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.accent}`,
        }}
        icon={<GiPodiumWinner />}
        position={'right'}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://ggulivrr.uni.lodz.pl/'
            target='_blank'
            aria-label='ggulivrr'>
            Winning Team - GGULIVRR
          </StyledLink>
        </h3>

        <StyledP>
          Team leader of{' '}
          <StyledLink
            href='https://ggulivrr.uni.lodz.pl/scancycle/'
            target='_blank'
            aria-label='ggulivrr'>
            'ScanCycle'
          </StyledLink>{' '}
          to 1st place prize in a 2 week international app prototyping
          competition.
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* H2C - Javascript Fullstack */}
      <StyledSubVerticalTimelineElement
        className='vertical-timeline-element--h2c-fullstack'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>
          Javascript fullstack
        </h3>

        <StyledP>
          Building single page applications with ReactJS that use REST APIs
          built with Node.js. React, Redux, Node.js, MongoDB, GraphQL and
          TypeScript.
        </StyledP>
      </StyledSubVerticalTimelineElement>

      {/* H2C - Ends*/}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--h2c-fullstack-starts'
        date='March 2021'
        iconStyle={{ background: colorPallet.primary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        icon={<TiMortarBoard />}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>H2C - Ends</h3>

        <StyledP>Graduated with average grade of 5 and 41cr / 40cr.</StyledP>
      </StyledVerticalTimelineElement>

      {/* Youtube - Visualizing Data*/}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--h2c-fullstack-starts'
        date='April 2021'
        iconStyle={{ background: 'red', color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        icon={<TiSocialYoutube />}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>
          <StyledLink
            href='https://www.youtube.com/watch?v=2LhoCfjm8R4'
            target='_blank'
            aria-label='Youtube'>
            Youtube - Visualizing Data
          </StyledLink>
        </h3>

        <StyledP>
          16 hour course on Data Visualization using D3 in react
        </StyledP>
      </StyledVerticalTimelineElement>

      {/* Jakereddy.com*/}
      <StyledVerticalTimelineElement
        className='vertical-timeline-element--h2c-fullstack-starts'
        date='May 2021'
        iconStyle={{ background: colorPallet.secondary, color: '#fff' }}
        contentStyle={{
          borderTop: `5px solid ${colorPallet.primary}`,
        }}
        icon={<TiInputChecked />}
        position={'left'}>
        <h3 className='vertical-timeline-element-title'>Jake-reddy.com</h3>

        <StyledP>
          Created this website you are currently on to be my portfolio.
        </StyledP>
      </StyledVerticalTimelineElement>
    </StyledVerticalTimeline>
  )
}

export default VerticalTimelineComponent
