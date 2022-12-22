import React from "react";
import styled from "styled-components";
import { Tetris } from "../Components/Games/Tetris/Tetris";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

export const Home = () => {
  const onDelete = () => {
    window.localStorage.removeItem("h98-username");
    window.location.reload();
  };
  return (
    <Wrapper>
      <div onClick={onDelete}>Logout</div>
      <Tetris />
    </Wrapper>
  );
};
