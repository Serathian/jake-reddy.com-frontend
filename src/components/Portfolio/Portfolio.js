import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <PortfolioContainer>
        <PortfolioWrapper>
          <PortfolioHeaderWrapper>
            <PortfolioTitle>This is my portfolio</PortfolioTitle>
            <PortfolioSubtitle>This is a subtitle</PortfolioSubtitle>
          </PortfolioHeaderWrapper>
          <PortfolioContents>
            <Portfolio />
          </PortfolioContents>
        </PortfolioWrapper>
      </PortfolioContainer>
    </div>
  )
}

export default Portfolio
