import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

const HomeHeader = () => {
  return (
    <div>
      <Container h="lightgreen">
        <Main>
          <LogoHold to="/home">
            <Logo>
              <GiBookshelf size={30} color="green" />
            </Logo>
            <Logotext>Summarit</Logotext>
          </LogoHold>

          <SecondNav />
        </Main>
      </Container>
    </div>
  );
};

export default HomeHeader;

const SecondNav = styled(AiOutlineMenu)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 350ms;
  display: none;

  :hover {
    color: #3e3e3e;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
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

const Container = styled.div<{ h: string }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  transition: all 400ms;
  align-items: center;
  /* background-color: #27AE61; */
  background-color: ${({ h }) => h};
  position: fixed;
  z-index: 10;
`;
