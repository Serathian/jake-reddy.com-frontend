import React from 'react'
import VerticalTimelineComponent from '../VerticalTimeline/VerticalTimelineComponent'

import {
  TimelinePopupBg,
  TimelinePopupContainer,
  TimeLinePopupWrapper,
  TimelinePopupBtn,
} from './TimelinePopupElements'

const TimelinePopup = ({ timelineIsOpen, toggleTimeline }) => {
  if (timelineIsOpen) {
    return (
      <TimelinePopupContainer>
        <TimelinePopupBg onClick={toggleTimeline}></TimelinePopupBg>
        <TimeLinePopupWrapper>
          <TimelinePopupBtn onClick={toggleTimeline}>X</TimelinePopupBtn>
          <VerticalTimelineComponent />
        </TimeLinePopupWrapper>
      </TimelinePopupContainer>
    )
  } else {
    return null
  }
}

export default TimelinePopup
