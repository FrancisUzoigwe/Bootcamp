import styled from "styled-components";
import ButtonProps from "../ReUse/ButtonProps";
import {GiBookshelf} from "react-icons/gi"
import {Link} from "react-router-dom"
import { useState } from "react";
const FirstHeader = () => {

const [scroll, setScroll] = useState<Boolean>(false)
const onScroll = () => {
  if(window.scrollY >= 60) {
    setScroll(true)
  }else{
    setScroll(false)
  }
}
window.addEventListener("scroll", onScroll)

  return (
    <div>
      {
        scroll? <Container h="#27AE61">
        <Main>
            <LogoHold to="/home">
                <Logo><GiBookshelf size={30} color="green"/></Logo>
                <Logotext>Summarit</Logotext>
            </LogoHold>
            <CTA>
                <ButtonProps text="SignIn" col="white" mr="5px" hcol="black" link="/auth/signIn"/>
                <ButtonProps text="SignUp" bg="white" col="blue" hcol="black" link="/auth/signUp"/>
            </CTA>
        </Main>
      </Container>
      : <Container h="transperent">
      <Main>
          <LogoHold to="/home">
              <Logo><GiBookshelf size={30} color="green"/></Logo>
              <Logotext>Summarit</Logotext>
          </LogoHold>
          <CTA>
              <ButtonProps text="SignIn" col="white" mr="5px" hcol="white" link="/auth/signIn"/>
              <ButtonProps text="SignUp" bg="green" col="white" hcol="blue" link="/auth/signUp"/>
          </CTA>
      </Main>
    </Container> }
    </div>
  )
}

export default FirstHeader


const CTA = styled.div`
display: flex;
justify-content: space-between;
`;

const Logo = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;

const Logotext = styled.div`
font-family: Nova Oval;
margin-left: 5px;
color: white;
font-weight: 900;
`;

const LogoHold = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
`;

const Main = styled.div`
width: 93%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div<{h: string}>`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
transition: all 400ms ;
align-items: center;
/* background-color: #27AE61; */
background-color: ${({h}) => h};
position: fixed;
z-index: 10;
`;