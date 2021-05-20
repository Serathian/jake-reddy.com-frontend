import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import starmountain from '../assets/images/star-mountain.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${starmountain}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .container {
    position: absolute;
    justify-content: center;
  }
`

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay' />
      <Container>
        <h1>Welcome</h1>
        <p>Welcome to your adventure</p>
      </Container>
    </Jumbo>
  </Styles>
)

export default Jumbotron
