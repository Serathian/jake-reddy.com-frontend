import styled from 'styled-components/macro'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

export const StyledVerticalTimeline = styled(VerticalTimeline)``
export const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  margin: 5px;

  & .vertical-timeline-element-date {
    color: white;
    opacity: 100;
  }

  & .vertical-timeline-element-content {
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  & .vertical-timeline-element-content p {
    font-weight: 200;
    line-height: normal;
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  @media only screen and (min-width: 1170px) {
    margin: 5px 0;
  }
`
