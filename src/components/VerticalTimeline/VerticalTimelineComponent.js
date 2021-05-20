import React from 'react'
import {
  StyledVerticalTimeline,
  StyledVerticalTimelineElement,
} from './VerticalTimelineElements'
import 'react-vertical-timeline-component/style.min.css'
import { colorPallet } from '../../assets/ColorPallet'
import {
  TiSocialYoutube,
  TiCodeOutline,
  TiVendorAndroid,
  TiMortarBoard,
  TiInfo,
  TiGroupOutline,
} from 'react-icons/ti'

const VerticalTimelineComponent = () => {
  return (
    <div>
      <StyledVerticalTimeline>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='April 2020'
          iconStyle={{ background: colorPallet.accent, color: '#fff' }}
          icon={<TiInfo />}>
          <h3 className='vertical-timeline-element-title'>
            Redundancy started
          </h3>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='April 2020'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          icon={<TiCodeOutline />}>
          <h3 className='vertical-timeline-element-title'>
            freecodecamp.com - C#
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration</h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='May 2020'
          iconStyle={{ background: 'red', color: '#fff' }}
          icon={<TiSocialYoutube />}>
          <h3 className='vertical-timeline-element-title'>
            Youtube course - Java
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration</h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--self-study'
          date='June 2020'
          iconStyle={{ background: 'green', color: '#fff' }}
          icon={<TiVendorAndroid />}>
          <h3 className='vertical-timeline-element-title'>
            Dabbled in android dev - Java
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>duration </h4>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-head'
          date='July 2020'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentArrowStyle={{
            borderRight: `7px solid ${colorPallet.primary}`,
          }}
          icon={<TiMortarBoard />}>
          <h3 className='vertical-timeline-element-title'>
            Highway 2 code - starts
          </h3>

          <p>
            6 month bootcamp run by centria university with the focus of
            training fullstack web developers
          </p>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='August 2020'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{
            borderTop: `5px solid ${colorPallet.primary}`,
          }}
          icon={<TiCodeOutline />}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>More c#</h3>
          <p>6 weeks - Perfect grades</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='November 2012'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{
            borderTop: `5px solid ${colorPallet.primary}`,
          }}
          icon={<TiGroupOutline />}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>Agile Frameworks</h3>
          <p>
            Overview of various software developement frameworks and practices
          </p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-element'
          date='2002 - 2006'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{
            borderTop: `5px solid ${colorPallet.primary}`,
          }}
          icon={<TiMortarBoard />}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>UX/UI</h3>

          <p>Introduction to UX and UI developement</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-fullstack-starts'
          date='2002 - 2006'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{
            borderTop: `5px solid ${colorPallet.primary}`,
          }}
          icon={<TiMortarBoard />}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>
            Javascript fullstack starts
          </h3>

          <p>12 weeks</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          className='vertical-timeline-element--h2c-fullstack-starts'
          date='2002 - 2006'
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          contentStyle={{
            borderTop: `5px solid ${colorPallet.primary}`,
          }}
          icon={<TiMortarBoard />}
          position={'right'}>
          <h3 className='vertical-timeline-element-title'>
            Javascript fullstack starts
          </h3>

          <p>12 weeks</p>
        </StyledVerticalTimelineElement>
        <StyledVerticalTimelineElement
          iconStyle={{ background: colorPallet.primary, color: '#fff' }}
          icon={<TiMortarBoard />}
        />
      </StyledVerticalTimeline>
    </div>
  )
}

export default VerticalTimelineComponent
