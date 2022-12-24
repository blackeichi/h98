import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Blocks, Box, Game } from "./style";

//variables
const cols = 10;
const rows = 20;
//
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem: any;
const movingItem = {
  type: "Tshape",
  direction: 0,
  top: 0,
  left: 0,
};

/* 새로운 Line 그리기 */
const createLine = (background: React.RefObject<HTMLUListElement>) => {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < cols; j++) {
    const pixel = document.createElement("li");
    ul.prepend(pixel);
  }
  li.prepend(ul);
  background.current?.prepend(li);
};
/* 블록 그리기 */
const renderBlocks = (background: any) => {
  const { type, direction, top, left } = tempMovingItem;
  //Blocks 에서 타입과 방향에 맞는 배열 4개(블록모양) 가져옴
  Blocks[type][direction].forEach((block: any) => {
    //4개의 각 배열에서 x와 y값 뽑아냄
    const x = block[0];
    const y = block[1];
    const target = background.childNodes;
  });
};

export const Tetris = () => {
  const background = useRef<HTMLUListElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      //row의 숫자만큼 line 그리기
      for (let i = 0; i < rows; i++) {
        createLine(background);
      }
      tempMovingItem = { ...movingItem };
      renderBlocks(background.current);
      setLoading(true);
    }
  }, []);
  return (
    <Box>
      <h1 className="score">0</h1>
      <Game>
        <ul className="background" ref={background}></ul>
      </Game>
    </Box>
  );
};
