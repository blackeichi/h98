import React from "react";
import styled from "styled-components";
import { WrapperIcon } from "./WrapperIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20px;
  left: 20px;
`;

export const Wallpaper = () => {
  return (
    <Wrapper>
      <WrapperIcon
        text="Tetris"
        photo="/img/tetris/tetrisIcon.png"
        setPro="Tetris"
      />
    </Wrapper>
  );
};
