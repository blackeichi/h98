import { motion } from "framer-motion";
import styled from "styled-components";

export const Game = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.8);
  position: relative;
  @media screen and (max-height: 750px) {
    height: 600px;
  }
  height: 700px;
  ul {
    @media screen and (max-height: 750px) {
      width: 300px;
    }
    width: 350px;
    margin: 0 auto;
    li {
      width: 100%;
      @media screen and (max-height: 750px) {
        height: 30px;
      }
      height: 35px;
      ul {
        display: flex;
        li {
          @media screen and (max-height: 750px) {
            height: 30px;
            width: 30px;
          }
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;
export const GameOverBox = styled.div`
  width: 100%;
  @media screen and (max-height: 750px) {
    height: 600px;
  }
  height: 700px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  gap: 10px;
  box-sizing: border-box;
`;
export const GameoverText = styled.h1`
  color: white;
  text-shadow: 0.5px 0.5px 2px white, -0.5px -0.5px 2px white;
  font-size: 40px;
`;
export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 80px;
`;
export const BtnText = styled(motion.h1)`
  font-size: 25px;

  cursor: pointer;
`;
export const NextBlock = styled.img`
  height: 140px;
`;
export const InfoBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  width: 100%;
`;
export const InfoBox_Text = styled.h1`
  font-size: 35px;
`;

export const Blocks: any = {
  Tshape: [
    [
      [2, 1],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [2, 1],
      [0, 1],
      [1, 2],
      [1, 1],
    ],
    [
      [2, 1],
      [1, 2],
      [1, 0],
      [1, 1],
    ],
  ],
  Straight: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  ],
  Square: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  Sskew: [
    [
      [2, 0],
      [1, 1],
      [1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [1, 1],
      [0, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [1, 1],
      [0, 1],
      [1, 2],
    ],
  ],
  Zskew: [
    [
      [0, 0],
      [2, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [2, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  Jtetromino: [
    [
      [0, 0],
      [0, 1],
      [2, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 2],
      [1, 2],
    ],
  ],
  Ltetromino: [
    [
      [2, 1],
      [0, 1],
      [2, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 2],
      [0, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [2, 0],
      [1, 0],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  ],
};
