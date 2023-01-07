import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "../../Icon";
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
} from "../../CommonStyle";
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
} from "./style";

import "./style.css";
import { GameScreen } from "./Components/GameScreen";

export const Tetris = () => {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <Box>
      <Header style={{ width: "99%" }}>
        <RowBox style={{ width: "fit-content", gap: "4px" }}>
          <IconImg src="/img/comIcon.png" />
        </RowBox>
        <div style={{ display: "flex", gap: "8px" }}>
          <Icon text="□" />
          <Icon text="X" />
        </div>
      </Header>
      <Menu>
        <MenuText>
          <u>F</u>ile
        </MenuText>
        <MenuText>
          <u>E</u>dit
        </MenuText>
        <MenuText>
          <u>H</u>elp
        </MenuText>
      </Menu>
      <Overlay>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            fontFamily: "DungGeunMo",
            textShadow: "0.5px 0.5px 2px black, -0.5px -0.5px 2px black",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {gameStarted ? (
            <GameScreen />
          ) : (
            <Wrapper style={{ zIndex: 1 }}>
              <Background>
                <HomeBox>
                  <Title>TETRIS</Title>
                  <BtnText
                    onClick={() => {
                      setGameStarted(true);
                    }}
                  >
                    PLAY
                  </BtnText>
                </HomeBox>
              </Background>
            </Wrapper>
          )}
        </div>
      </Overlay>
    </Box>
  );
};
