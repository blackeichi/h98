import { motion } from "framer-motion";
import styled from "styled-components";

export const Game = styled.div`
  background-color: white;
  border: 3px solid rgba(0, 0, 0, 0.8);
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
          //box-shadow: -0.2px 0 #333, 0 0.2px #333, 0.2px 0 #333, 0 -0.2px #333;
        }
      }
    }
  }
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
  font-weight: bold;
`;
export const BtnText = styled(motion.h1)`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
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
