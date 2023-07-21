import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface iBut {
  col?: string;
  text?: string;
  bg?: string;
  hbg?: string;
  hcol?: string;
  link?: string;
  ml?: string;
  mr?: string;
}
const ButtonProps: React.FC<iBut> = ({ bg, hbg, col, text, hcol, link , ml, mr}) => {
  return (
    <div>
      <Button bg={bg!} hbg={hbg!} col={col!} hcol={hcol!} to={link!} ml={ml!} mr={mr!}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonProps;
const Button = styled(Link)<{
  bg: string;
  col: string;
  hbg: string;
  hcol: string;
  ml: string;
  mr: string;
}>`
  padding: 8px 15px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  transition: all 350ms;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  margin-right: ${({mr}) => mr};
  margin-left: ${({ml}) => ml};

  :hover {
    background-color: ${({ hbg }) => hbg};
    color: ${({ hcol }) => hcol};
  }
`;
