import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <CatHold>
            <DivHold>
              <Title>Categories</Title>
              <Sub>Poems</Sub>
              <Sub>Literature</Sub>
              <Sub>Comedy</Sub>
              <Sub>Tragedy</Sub>
              <Sub>Romantic</Sub>
              <Sub></Sub>
            </DivHold>
            <DivHold>
              <Title>Categories</Title>
              <Sub>Poems</Sub>
              <Sub>Literature</Sub>
              <Sub>Comedy</Sub>
              <Sub>Tragedy</Sub>
              <Sub>Romantic</Sub>
              <Sub></Sub>
            </DivHold>
            <DivHold>
              <Title>Categories</Title>
              <Sub>Poems</Sub>
              <Sub>Literature</Sub>
              <Sub>Comedy</Sub>
              <Sub>Tragedy</Sub>
              <Sub>Romantic</Sub>
              <Sub></Sub>
            </DivHold>
            <DivHold>
              <Title>Categories</Title>
              <Sub>Poems</Sub>
              <Sub>Literature</Sub>
              <Sub>Comedy</Sub>
              <Sub>Tragedy</Sub>
              <Sub>Romantic</Sub>
              <Sub></Sub>
            </DivHold>
          </CatHold>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;
const Title = styled.div`
font-size: 17px;
`;

const Sub = styled.div`
margin-top: 10px;
font-size: 13px;
`;

const DivHold = styled.div`
display: flex;
flex-direction: column;
/* margin-left: 40px; */
width: 20%;
`;

const CatHold = styled.div`
width: 100%;
height: 200px;
display: flex;
color: white;
justify-content: space-between;

@media screen and (max-width: 500px){
 /* flex-direction: column; */

}
`;

const Main = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
