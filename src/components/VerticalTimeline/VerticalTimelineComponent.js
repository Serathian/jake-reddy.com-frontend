import React from 'react'
import {
  StyledVerticalTimeline,
  StyledVerticalTimelineElement,
} from './VerticalTimelineElements'
import 'react-vertical-timeline-component/style.min.css'
import { VscCode } from 'react-icons/vsc'

const VerticalTimelineComponent = () => {
  return (
    <div>
      <StyledVerticalTimeline>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date='April 2020'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={VscCode}>
          <h3 className='vertical-timeline-element-title'>
            freecodecamp.com - C#
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration</h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='May 2020'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={VscCode}>
          <h3 className='vertical-timeline-element-title'>
            Youtube course - Java
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration</h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='June 2020'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={VscCode}>
          <h3 className='vertical-timeline-element-title'>
            Dabbled in android dev - Java
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration </h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-head'
          date='July 2020'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={VscCode}>
          <h3 className='vertical-timeline-element-title'>
            Highway 2 code - starts
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            6 month bootcamp run by centria university
          </h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='August 2020'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={VscCode}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>More c#</h3>
          <p>6 weeks - Perfect grades</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='November 2012'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={VscCode}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>Agile Frameworks</h3>
          <p>
            Overview of various software developement frameworks and practices
          </p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={VscCode}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>UX/UI</h3>

          <p>Introduction to UX and UI developement</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-fullstack-starts'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={VscCode}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>
            Javascript fullstack starts
          </h3>

          <p>12 weeks</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-fullstack-starts'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={VscCode}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>
            Javascript fullstack starts
          </h3>

          <p>12 weeks</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={VscCode}
        />
      </StyledVerticalTimeline>
    </div>
  )
}

export default VerticalTimelineComponent
