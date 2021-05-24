import React from 'react'
import FullScreenPopup from '../FullScreenPopup/FullScreenPopup'
import VerticalTimelineComponent from '../VerticalTimeline/VerticalTimelineComponent'

const VerticalTimelinePopup = ({ timelineIsOpen, toggleTimeline }) => {
  return (
    <FullScreenPopup togglePopup={toggleTimeline} popupIsOpen={timelineIsOpen}>
      <VerticalTimelineComponent />
    </FullScreenPopup>
  )
}

export default VerticalTimelinePopup
