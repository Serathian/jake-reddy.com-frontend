import styled from 'styled-components/macro'
import { colorPallet } from '../../assets/ColorPallet'

export const FullScreenPopupContainer = styled.div`
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

export const FullScreenPopupBg = styled.div`
  position: fixed;
  z-index: 1001;
  background: #0d0d0d;
  opacity: 0.75;
  height: 100%;
  width: 100%;
`
export const FullScreenPopupWrapper = styled.div`
  border-radius: 2.5%;
  z-index: 1002;
  width: fit-content;
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
export const FullScreenPopupBtn = styled.button`
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
  z-index: 1009;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  }

  @media screen and (max-width: 760px) {
    top: unset;
    bottom: 2%;
    right: 5%;
  }
`
