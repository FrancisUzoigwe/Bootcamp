import styled from "styled-components";
import Book from "../../Assets/Book.png";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Hero>
            <Hold>
              <BigText>
                Summarit: Summarizing Books <br /> One Book at a Time
              </BigText>
              <SmallText>
                Expand Your Horizons with Our Book-Summarizing Platform
              </SmallText>
            </Hold>
          </Hero>
          <Second>
            <SecondMain>
              <Cat>View Categories</Cat>
              <CatHold></CatHold>
            </SecondMain>
          </Second>
        </Main>
      </Container>
    </div>
  );
};

export default LandingPage;
const CatHold = styled.div`
width: 100%;
height: auto;
display: flex;
`;

const Cat = styled.div`
font-size: 18px;
font-weight: 600;
margin-top: 20px;
`;

const SecondMain = styled.div`
width: 100%;
height: auto;
`;

const Second = styled.div`
width: 100%;
height: 100vh;
background: orange;
`;

const SmallText = styled.div`
  margin-top: 20px;
  color: white;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const Hold = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const BigText = styled.div`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-right: 30px;
  font-family: Nova Oval;
  color: white;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }

  @media screen and (max-width: 700px) {
    font-size: 35px;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;
const Hero = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${Book});
  opacity: 0.8;
  display: flex;
  position: relative;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: top;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 70vh;
  }
`;

const Main = styled.div`
  width: 93%;
  height: auto;
  margin-top: 60px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
