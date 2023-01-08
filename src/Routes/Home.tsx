import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Tetris } from "../Components/Games/Tetris/Tetris";
import { Wallpaper } from "../Components/Wallpaper/Wallpaper";
import { openProgram } from "../utils/atom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
`;

export const Home = () => {
  const onDelete = () => {
    window.localStorage.removeItem("h98-username");
    window.location.reload();
  };
  const [program, setProgram] = useRecoilState(openProgram);
  return (
    <Wrapper>
      {/*<div onClick={onDelete}>Logout</div>*/}
      <Wallpaper />
      {program === "Tetris" ? <Tetris /> : <></>}
    </Wrapper>
  );
};
