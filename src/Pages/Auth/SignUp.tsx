import styled from "styled-components";
import ButtonProps from "../../Components/ReUse/ButtonProps";
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Image src="" alt="Photo" />
            <Up>Upload</Up>
          </Top>
          <Holder>
            <Sub>
              <Name>UserName:</Name>
              <Input placeholder="Enter Your User Name" />
            </Sub>
          </Holder>
          <Holder>
            <Sub>
              <Name>Name:</Name>
              <Input placeholder="Enter Your Last Name" />
            </Sub>
          </Holder>
          <Holder>
            <Sub>
              <Name>Email Address:</Name>
              <Input placeholder="example@gmail.com" />
            </Sub>
          </Holder>
          <Holder>
            <Sub>
              <Name>Password:</Name>
              <Input placeholder="Enter Password" type="password"/>
            </Sub>
          </Holder>
          <Holder>
            <Sub>
              <Name>Confirm Password:</Name>
              <Input placeholder="Repeat Password" type="password"/>
            </Sub>
          </Holder>

          <Button>
            <ButtonProps text="SignUp" bg="black" col="white" />
          </Button>
          <Dec>Already have an account? <Span to="/auth/signIn">SignIn</Span></Dec>
        </Main>
      </Container>
    </div>
  );
};

export default SignUp;
const Span = styled(Link)`
text-decoration: none;
`;

const Dec = styled.div`
font-size: 14px;
margin-left: 30px;
margin-top: 10px;
`;

const Button = styled.div`
  margin-top: 20px;
  margin-left: 110px;
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

const Input = styled.input`
  width: 96%;
  height: 30px;
  outline: none;
  border: none;
`;


const Up = styled.div`
  padding: 5px 15px;
  font-size: 13px;
  border-radius: 10px;
  color: white;
  background-color: black;
  margin-top: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 300px;
  height: 550px;
  border-radius: 10px;
  background: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: relative;
`;
