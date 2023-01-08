import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { openProgram } from "../../utils/atom";

type TIcon = {
  photo: string;
  text: string;
  setPro: string;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  height: 60px;
  font-weight: 100;
`;
const Img = styled.img`
  width: 40px;
`;
const Text = styled.h1`
  font-size: 13px;
  color: white;
`;

export const WrapperIcon = ({ photo, text, setPro }: TIcon) => {
  const setProgram = useSetRecoilState(openProgram);
  return (
    <Wrapper
      onClick={() => {
        setProgram(setPro);
      }}
    >
      <Img src={photo} />
      <Text>{text}</Text>
    </Wrapper>
  );
};
