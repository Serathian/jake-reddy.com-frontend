import styled from 'styled-components/macro'
import { colorPallet } from '../../assets/ColorPallet'

export const TimelinePopupContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`

export const TimelinePopupBg = styled.div`
  position: fixed;
  z-index: 1001;
  background: #0d0d0d;
  opacity: 0.5;
  height: 100%;
  width: 100%;
`
export const TimeLinePopupWrapper = styled.div`
  background-color: lightgray;
  border-radius: 2.5%;
  z-index: 1002;
  width: 70%;
  height: 95%;
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const TimelinePopupBtn = styled.button`
  position: fixed;
  top: 1.25%;
  right: 14%;
  background: ${colorPallet.accent};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  }
`
