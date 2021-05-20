import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colorPallet } from '../assets/ColorPallet'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ accent }) =>
    accent ? colorPallet.accent : colorPallet.primary};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ accent }) => (accent ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ accent }) => (accent ? '#ffff' : colorPallet.secondary)};
  }
`
