import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Blocks, Box, Game } from "./style";
import "./style.css";

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
  left: 3,
};

const pressBtn = (e: any, background: any) => {
  switch (e.code) {
    case "ArrowRight":
      moveBlock("left", 1, background);
      break;
    case "ArrowLeft":
      moveBlock("left", -1, background);
      break;
    case "ArrowDown":
      moveBlock("top", 1, background);
      break;
    case "ArrowUp":
      moveBlock("top", -1, background);
      break;
  }
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
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    moving.classList.remove(type, "moving");
  });
  //Blocks 에서 타입과 방향에 맞는 배열 4개(블록모양) 가져옴
  Blocks[type][direction].forEach((block: any) => {
    //4개의 각 배열에서 x와 y값 뽑아냄
    const x = block[0] + left;
    const y = block[1] + top;
    //[[0,0],[0,1],[1,0],[1,1]] 을 각각 block -> target
    const target = background.childNodes[y]
      ? background.childNodes[y].childNodes[0].childNodes[x]
      : null;
    const isAvailable = checkAvailable(target);
    //만약 target이 존재하면 move하고
    if (isAvailable) {
      target.classList.add(type, "moving");
      //아니라면 이전 블록유지
    } else {
      tempMovingItem = { ...movingItem };
      setTimeout(() => {
        renderBlocks(background);
      }, 0);
    }
  });
  // 블록을 성공적으로 랜더링했을 시 movingItem에 현재 블록의 상태를 저장
  movingItem.direction = direction;
  movingItem.top = top;
  movingItem.left = left;
};
function checkAvailable(target: any) {
  if (!target || target.classList.contains("seized")) {
    return false;
  }
  return true;
}
/*블록 이동*/
const moveBlock = (direction: string, amount: number, background: any) => {
  tempMovingItem[direction] += amount;
  renderBlocks(background);
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
  });
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      pressBtn(event, background.current);
      console.log(event);
    });
    return () => {
      document.removeEventListener("keydown", (event) =>
        pressBtn(event, background.current)
      );
    };
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
