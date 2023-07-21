import styled from "styled-components";
import {GiBookshelf} from "react-icons/gi"
import ButtonProps from "../../Components/ReUse/ButtonProps";
import {Link} from "react-router-dom"

const SignIn = () => {
  return (
    <div>
      <Container>
        <Main>
            <Block><GiBookshelf size={60} color="green"/></Block>
          <Holder>
            <Sub>
              <Name>UserName:</Name>
              <Input placeholder="Enter Your User Name" />
            </Sub>
          </Holder>
          <Holder>
            <Sub>
              <Name>Password:</Name>
              <Input placeholder="Enter Your Password" type="password"/>
            </Sub>
          </Holder>
          <Button>
            <ButtonProps text="SignIn" col="white" bg="black" link="/home"/>
          </Button>
          <Dec>Dont't have an account <Li to="/auth/signUp">SignUp</Li></Dec>
        </Main>
      </Container>
    </div>
  );
};

export default SignIn;


const Li = styled(Link)`
margin-left: 5px;
text-decoration: none;

`;

const Dec = styled.div`
font-size: 14px;
margin-top: 20px;
`;

const Button = styled.div`
margin-top: 30px;

`;

const Block  = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background: white;
border: 1px solid green;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin-top: 20px;
`;

const Input = styled.input`
  width: 96%;
  height: 30px;
  outline: none;
  border: none;
`;

const Sub = styled.div`
  position: relative;
  height: 35px;
  width: 90%;
  border: 1px solid blue;
  border-radius: 8px;
`;

const Name = styled.div`
  font-size: 13px;
  background-color: white;
  margin-top: -10px;
  width: auto;
  position: absolute;
  margin-left: 15px;
  font-weight: 500;
`;

const Holder = styled.div`
  /* position: relative; */
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Main = styled.div`
  width: 300px;
  height: 330px;
  border-radius: 10px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
