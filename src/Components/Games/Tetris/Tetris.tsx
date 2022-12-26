import React, { useEffect, useRef, useState } from "react";
import { Blocks, Box, Game } from "./style";
import "./style.css";

export const Tetris = () => {
  const background = useRef<HTMLUListElement>(null);
  const [loading, setLoading] = useState(false);
  //variables
  const cols = 10;
  const rows = 20;
  let score = 0;
  let duration = 600;
  let downInterval: any;
  let tempMovingItem: any;
  const movingItem = {
    type: "",
    direction: 0,
    top: 0,
    left: 3,
  };
  const gameText = document.querySelector(".game-text");
  const init = () => {
    const scoreDisplay = document.querySelector(".score") as HTMLElement | null;
    score = 0;
    if (scoreDisplay) {
      scoreDisplay.innerText = String(score);
    }

    const playground = document.querySelector(".background");
    //row의 숫자만큼 line 그리기
    for (let i = 0; i < rows; i++) {
      createLine(playground);
    }
    generateNewBlock(playground);
  };

  /* 새로운 Line 그리기 */
  const createLine = (background: any) => {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < cols; j++) {
      const pixel = document.createElement("li");
      ul.prepend(pixel);
    }
    li.prepend(ul);
    background.prepend(li);
  };

  /* 블록 그리기 */
  const renderBlocks = (background: any, moveType?: string) => {
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving) => {
      moving.classList.remove(type, "moving");
    });
    //Blocks 에서 타입과 방향에 맞는 배열 4개(블록모양) 가져옴
    Blocks[type][direction].some((block: any) => {
      //forEach 대신 some을 사용한 이유는 return true로 중간에 break할 수 없기 때문에
      //4개의 각 배열에서 x와 y값 뽑아냄
      const x = block[0] + left;
      const y = block[1] + top;
      //[[0,0],[0,1],[1,0],[1,1]] 을 각각 block -> target
      const target = background.childNodes[y]
        ? background.childNodes[y].childNodes[0].childNodes[x]
        : null;
      const isAvailable = checkEmpty(target);
      //만약 target이 존재하면 move하고
      if (isAvailable) {
        target.classList.add(type, "moving");
        //아니라면 이전 블록유지
      } else {
        tempMovingItem = { ...movingItem };
        // 만약 두 번 연속 블록이 못움직이면(moveType === "gameover"면) 게임종료.
        if (moveType === "gameover") {
          clearInterval(downInterval);
          Gameover();
          return true;
        }
        setTimeout(() => {
          renderBlocks(background, "gameover");
          //만약 바닥에 도착하면 seizeBlock으로 블록 고정.
          if (moveType === "top") {
            seizeBlock(background);
          }
        }, 0);
        return true;
      }
    });
    // 블록을 성공적으로 랜더링했을 시 movingItem에 현재 블록의 상태를 저장
    movingItem.direction = direction;
    movingItem.top = top;
    movingItem.left = left;
  };

  //게임오버
  const Gameover = () => {
    console.log("game over");
  };

  //블록 고정
  const seizeBlock = (background: any) => {
    const movingBlocks = document.querySelectorAll(".moving");
    // 블록 elements에 moving 클래스를 제거하고 seized 클래스를 추가한다.
    // moving을 제거하는 이유는 블록을 화면에 계속 표시하기 위함임
    // sezied을 추가하는 이유는 후에 한 줄이 찼을 때 해당 줄을 삭제하기 위함임
    movingBlocks.forEach((moving) => {
      moving.classList.remove("moving");
      moving.classList.add("seized");
    });
    checkMatch(background);
  };
  // 한 줄이 블록으로 모두 차있는지 확인하는 함수
  const checkMatch = (background: any) => {
    const childNodes = background.childNodes;
    // 각 라인을 순회
    childNodes.forEach((child: any) => {
      let matched = true;
      // 한줄의 모든 element의 클래스에 seized가 있다면 한 줄이 모두 블록으로 찬 것이므로 이를 확인
      child.children[0].childNodes.forEach((li: any) => {
        const seizedBlock = li.classList.contains("seized");
        if (!seizedBlock) {
          matched = false;
        }
      });

      // 해당 라인을 삭제하고 점수를 추가 한다
      if (matched) {
        child.remove();
        // 한 줄을 삭제하고 상단에 한 줄을 추가해주기 위해 prependNewLine()을 호출
        createLine(background);
        score += 10;
        const scoreDisplay = document.querySelector(
          ".score"
        ) as HTMLElement | null;
        if (scoreDisplay) {
          scoreDisplay.innerText = String(score);
        }
        duration =
          score <= 100
            ? 600
            : score <= 200
            ? 500
            : score <= 300
            ? 400
            : score <= 400
            ? 300
            : score <= 500
            ? 200
            : 100;
      }
    });
    generateNewBlock(background);
  };
  //블록 새로 생성
  const generateNewBlock = (background: any) => {
    //clearInterval(downInterval); = 블록이 아래로 떨어지는 것을 잠시 중단
    clearInterval(downInterval);
    // 블록이 duration에 한번 아래로 한칸 이동
    // setInterval 로 다시 재개
    downInterval = setInterval(() => {
      moveBlock("top", 1, background);
    }, duration);
    const blockArray = Object.entries(Blocks);
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    movingItem.type = blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };
    renderBlocks(background);
  };

  //블록이 더 이동할 수 있는지(여백이 존재하는지).
  const checkEmpty = (target: any) => {
    //고정된 블록이 있거나 빈 여백이 없으면 false
    if (!target || target.classList.contains("seized")) {
      return false;
    }
    return true;
  };

  /*블록 이동*/
  const moveBlock = (direction: string, amount: number, background: any) => {
    tempMovingItem[direction] += amount;
    renderBlocks(background, direction);
  };

  //방향 전환
  const changeDirection = (background: any) => {
    tempMovingItem.direction === 3
      ? (tempMovingItem.direction = 0)
      : (tempMovingItem.direction += 1);
    renderBlocks(background);
  };

  //블록을 빠르게 내려오게 하는 함수
  const dropBlock = (background: any) => {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
      moveBlock("top", 1, background);
    }, 20);
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
        dropBlock(background);
        break;
      case "Space":
        changeDirection(background);
        break;
      default:
        break;
    }
  };
  const upBtn = (e: any, background: any) => {
    switch (e.code) {
      case "ArrowDown":
        {
          clearInterval(downInterval);
          downInterval = setInterval(() => {
            moveBlock("top", 1, background);
          }, duration);
        }
        break;
    }
  };
  useEffect(() => {
    if (!loading) {
      tempMovingItem = { ...movingItem };
      init();
    }
    setLoading(true);
  }, [loading]);
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      pressBtn(event, background.current);
    });
    document.addEventListener("keyup", (event) => {
      upBtn(event, background.current);
    });
    return () => {
      document.removeEventListener("keydown", (event) =>
        pressBtn(event, background)
      );
      document.addEventListener("keyup", (event) => {
        upBtn(event, background);
      });
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
