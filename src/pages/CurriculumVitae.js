import React from 'react'
import styled from 'styled-components'
import CVContent from '../components/CurriculumVitae/CVContent/CVContent'
import CVSidebar from '../components/CurriculumVitae/CVSidebar/CVSidebar'

const CV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CVContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 12px;
`

const CurriculumVitae = () => {
  return (
    <CV>
      <CVContainer>
        <CVSidebar />
        <CVContent />
      </CVContainer>
    </CV>
  )
}

export default CurriculumVitae
