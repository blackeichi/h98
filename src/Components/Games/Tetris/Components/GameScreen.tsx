import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Background,
  Box,
  Header,
  IconImg,
  Menu,
  MenuText,
  Overlay,
  RowBox,
  Wrapper,
} from "../../../CommonStyle";
import {
  Blocks,
  BtnText,
  Game,
  HomeBox,
  InfoBox,
  NextBlock,
  Title,
  InfoBox_Text,
  GameOverBox,
  GameoverText,
} from "../style";

export const GameScreen = () => {
  const background = useRef<HTMLUListElement>(null);
  //variables
  const cols = 10;
  const rows = 20;
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(600);
  let autoDrop: any;
  let tempMovingItem: any;
  let nextRandomIndex: number | undefined;
  const [NextBlockIndex, setNextBlockIndex] = useState(0) as any;
  const blockArray = Object.entries(Blocks);
  const [gameOver, setGameOver] = useState(false);
  const movingItem = {
    type: "",
    direction: 0,
    top: 0,
    left: 3,
  };
  const clickRetry = (background: any, gameoverBox: any) => {
    gameoverBox.style.display = "none";
    background.innerHTML = "";
    init();
  };
  useEffect(() => {
    tempMovingItem = { ...movingItem };
    setTimeout(init, 1000);
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
  const init = () => {
    const playground = document.querySelector(".background");
    setScore(0);
    //row의 숫자만큼 line 그리기
    for (let i = 0; i < rows; i++) {
      createLine(playground);
    }
    const firstRandom = Math.floor(Math.random() * blockArray.length);
    generateNewBlock(playground, firstRandom);
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
      moving.className = "";
      //moving.classList.remove(type, "moving");
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
          clearInterval(autoDrop);
          const gameoverBox = document.querySelector(".gameoverBox");
          Gameover(background, gameoverBox);
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
  const Gameover = (background: any, gameoverBox: any) => {
    setGameOver(true);
    background.innerHTML = "";
    //init();
    gameoverBox.style.display = "flex";
    const resetBtn = document.querySelector(".reset");
    resetBtn?.addEventListener("click", (event) => {
      clickRetry(background, gameoverBox);
    });
    console.log(resetBtn);
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
        setScore((prev) => prev + 10);
        setSpeed(
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
            : 100
        );
      }
    });
    generateNewBlock(background);
  };
  //블록 새로 생성
  const generateNewBlock = (background: any, firstRandom?: number) => {
    //clearInterval(autoDrop); = 블록이 아래로 떨어지는 것을 잠시 중단
    clearInterval(autoDrop);
    // 블록이 speed에 한번 아래로 한칸 이동
    // setInterval 로 다시 재개
    autoDrop = setInterval(() => {
      moveBlock("top", 1, background);
    }, speed);
    const randomIndex = firstRandom
      ? firstRandom
      : nextRandomIndex
      ? nextRandomIndex
      : 0;
    movingItem.type = blockArray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = { ...movingItem };
    renderBlocks(background);
    nextRandomIndex = Math.floor(Math.random() * blockArray.length);
    setNextBlockIndex(nextRandomIndex);
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
    clearInterval(autoDrop);
    autoDrop = setInterval(() => {
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
          clearInterval(autoDrop);
          autoDrop = setInterval(() => {
            moveBlock("top", 1, background);
          }, speed);
        }
        break;
    }
  };
  return (
    <>
      <Wrapper>
        <Background>
          <Game>
            <GameOverBox style={{ display: "none" }} className="gameoverBox">
              <GameoverText>GAME OVER</GameoverText>
              <GameoverText
                className="reset"
                //onClick={() => clickRetry(background.current)}
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                RETRY
              </GameoverText>
            </GameOverBox>
            <ul className="background" ref={background}></ul>
          </Game>
          <InfoBox>
            <Title style={{ fontSize: "60px" }}>TETRIS</Title>
            <InfoBox_Text>score : {score}</InfoBox_Text>
            <NextBlock
              src={`/img/tetris/${blockArray[NextBlockIndex][0]}.PNG`}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                marginTop: "50px",
              }}
            >
              <InfoBox_Text>Space</InfoBox_Text>

              <div
                style={{
                  width: "fitContent",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <InfoBox_Text>&uarr;</InfoBox_Text>
                <div style={{ display: "flex", gap: "40px" }}>
                  <InfoBox_Text>&larr;</InfoBox_Text>
                  <InfoBox_Text>&rarr;</InfoBox_Text>
                </div>
                <InfoBox_Text>&darr;</InfoBox_Text>
              </div>
            </div>
          </InfoBox>
        </Background>
      </Wrapper>
    </>
  );
};
