import styled from "styled-components";

export const Header = styled.div`
  background-color: ${(props) => props.theme.blueColor};
  width: 98%;
  margin: 3px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
  position: absolute;
  top: 0;
  z-index: 3;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.lightGray};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const RowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const IconImg = styled.img`
  height: 25px;
`;
export const Input = styled.input`
  padding: 6px 3px;
  box-sizing: border-box;
  border-top: 3.5px solid black;
  border-left: 3.5px solid black;
  border-bottom: 3.5px solid ${(props) => props.theme.lightGray};
  border-right: 3.5px solid ${(props) => props.theme.lightGray};
  font-size: 18px;
  font-family: "DungGeunMo";
`;
export const InfoText = styled.h1`
  font-size: 25px;
  color: black;
  display: flex;
  align-items: center;
  text-shadow: 0.5px 0.5px 2px white, -0.5px -0.5px 2px white;
`;
