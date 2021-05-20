import React from 'react'
import {
  CardsContaier,
  CardsContainerTitle,
  CardsWrapper,
  Card,
  CardIcon,
  CardH2,
  CardP,
} from './CardsElements'
import Icon1 from '../../assets/images/react-logo-1.svg'
import Icon2 from '../../assets/images/react-logo-1.svg'
import Icon3 from '../../assets/images/react-logo-1.svg'

const Cards = () => {
  return (
    <>
      <CardsContaier>
        <CardsContainerTitle>My Knowledge</CardsContainerTitle>
        <CardsWrapper>
          <Card>
            <CardIcon src={Icon1} />
            <CardH2>React Frontent</CardH2>
            <CardP>Something about using react javescript</CardP>
          </Card>
          <Card>
            <CardIcon src={Icon2} />
            <CardH2>Node.js Backend</CardH2>
            <CardP>Something about using react javescript</CardP>
          </Card>
          <Card>
            <CardIcon src={Icon3} />
            <CardH2>noSql Database</CardH2>
            <CardP>Something about using react javescript</CardP>
          </Card>
        </CardsWrapper>
      </CardsContaier>
    </>
  )
}

export default Cards
