import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.theme.grayColor};
  box-sizing: border-box;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  cursor: pointer;
`;

export const Icon = ({ text }: any) => {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  );
};
