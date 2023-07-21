import React from 'react'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Main></Main>
      </Container>
    </div>
  )
}

export default LandingPage
const Main = styled.div`
width: 93%;
height: 120vh;
background-color: blue;
`;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`;