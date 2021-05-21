import React from 'react'
import {
  CardsContaier,
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
import Icon3 from '../../assets/images/wordpress.svg'

const Cards = () => {
  return (
    <>
      <CardsContaier id='knowledge'>
        <CardsContainerTitle>My Knowledge</CardsContainerTitle>
        <CardsContainerSubtitle>So far...</CardsContainerSubtitle>
        <CardsWrapper>
          <Card>
            <CardIcon src={Icon1} />
            <CardH2>React</CardH2>
            <CardP>
              Creating responsive web apps with libraries like React-Router,
              Redux and Material-UI
            </CardP>
          </Card>
          <Card>
            <CardIcon src={Icon2} />
            <CardH2>Node.js</CardH2>
            <CardP>
              REST API's using Express framework and MongoDB, Mongoose, Apollo
              and GraphQL
            </CardP>
          </Card>
          <Card>
            <CardIcon src={Icon3} />
            <CardH2>Wordpress</CardH2>
            <CardP>
              Adept at creating websites using Wordpress and the powerful
              plugin, Elementor
            </CardP>
          </Card>
        </CardsWrapper>
      </CardsContaier>
    </>
  )
}

export default Cards
