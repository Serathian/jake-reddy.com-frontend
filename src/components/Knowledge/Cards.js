import React from 'react'
import {
  CardsContainer,
  CardsContainerTitle,
  CardsContainerSubtitle,
  CardsWrapper,
  Card,
  CardIcon,
  CardH2,
  CardP,
} from './CardsElements'
import Icon1 from '../../assets/images/react-logo-1.svg'
import Icon2 from '../../assets/images/nodejs-icon.svg'
import Icon3 from '../../assets/images/Figma-logo.svg'

const Cards = () => {
  return (
    <>
      <CardsContainer id='knowledge'>
        <CardsContainerTitle>My Knowledge</CardsContainerTitle>
        <CardsContainerSubtitle>So far...</CardsContainerSubtitle>
        <CardsWrapper>
          <Card>
            <CardIcon src={Icon1} />
            <CardH2>React</CardH2>
            <CardP>
              Creating responsive web apps with libraries like React-Router,
              Redux and Material-UI.
            </CardP>
          </Card>
          <Card>
            <CardIcon src={Icon2} />
            <CardH2>Node.js</CardH2>
            <CardP>
              REST API's using Express framework and MongoDB, Mongoose, Apollo
              and GraphQL.
            </CardP>
          </Card>
          <Card>
            <CardIcon src={Icon3} />
            <CardH2>Figma</CardH2>
            <CardP>Experienced in creating mock-ups and concept ideas.</CardP>
          </Card>
        </CardsWrapper>
      </CardsContainer>
    </>
  )
}

export default Cards
