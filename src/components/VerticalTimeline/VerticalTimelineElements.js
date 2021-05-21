import styled from 'styled-components/macro'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { colorPallet } from '../../assets/ColorPallet'

export const StyledVerticalTimeline = styled(VerticalTimeline)``
export const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  margin: 5px;

  & .vertical-timeline-element-date {
    color: black;
    opacity: 100;
  }

  & .vertical-timeline-element-content {
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  & .vertical-timeline-element-icon {
    width: 45px;
    height: 45px;
  }

  & .vertical-timeline-element-content p {
    font-weight: 200;
    font-size: 15px;
    line-height: normal;
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 1170px) {
    margin: 5px 0;

    & .vertical-timeline-element-date {
      color: white;
      opacity: 100;
    }
    & .vertical-timeline-element-icon {
      width: 60px;
      height: 60px;
    }
  }
`
export const StyledSubVerticalTimelineElement = styled(VerticalTimelineElement)`
  margin: 5px;

  & .vertical-timeline-element-date {
    color: white;
    opacity: 100;
  }

  & .vertical-timeline-element-content {
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  & .vertical-timeline-element-icon {
    width: 25px;
    height: 25px;
    border: 0;
  }

  & .vertical-timeline-element-content p {
    font-weight: 200;
    font-size: 12px;
    line-height: normal;
  }

  //BELOW IS BROWSER STYLES
  @media only screen and (min-width: 1170px) {
    margin: 5px 0;

    & .vertical-timeline-element-icon {
      width: 40px;
      height: 40px;
      left: 50%;
      margin-left: -20px;
    }

    & .vertical-timeline-element-content-arrow {
      top: 5px;
    }

    & .vertical-timeline-element-content {
      width: 30%;
      margin-left: 14%;
      padding: 0.7em 2em;
    }
  }
`
export const StyledLink = styled.a`
  color: ${colorPallet.accent};
  word-wrap: break-word;
`

export const StyledP = styled.p`
  font-size: 5px;
  font-weight: 200;
  line-height: normal;
  font-style: italic;
`
