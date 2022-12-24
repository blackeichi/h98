import styled from "styled-components";

export const Blocks: any = {
  Tshape: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Straight: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Square: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Sskew: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Zskew: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Jtetromino: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
  Ltetromino: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ],
};

export const Box = styled.div`
  width: 600px;
  height: 600px;
  background-color: tomato;
`;
export const Game = styled.div`
  background-color: white;
  ul {
    width: 250px;
    margin: 0 auto;
    li {
      width: 100%;
      height: 25px;
      ul {
        display: flex;
        li {
          width: 25px;
          height: 25px;
          border: 1px solid #333;
        }
      }
    }
  }
`;
