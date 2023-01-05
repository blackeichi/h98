import styled from "styled-components";

export const Header = styled.div`
  background-color: ${(props) => props.theme.blueColor};
  width: 98%;
  box-sizing: border-box;
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
export const MenuText = styled(InfoText)`
  font-size: 17px;
  font-weight: bold;
  cursor: not-allowed;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.grayColor};
`;

export const Menu = styled.div`
  width: 99%;
  z-index: 5;
  position: absolute;
  top: 38px;
  height: 32px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
  border-left: 2px solid rgba(0, 0, 0, 0.4);
  border-right: 2px solid rgba(0, 0, 0, 0.4);
`;
export const Overlay = styled.div`
  height: 100%;
  width: 99%;
  padding: 20px 0px;
  padding-top: 70px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.grayColor};
  box-sizing: border-box;
`;
export const Wrapper = styled(Overlay)`
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
`;
export const Background = styled.div`
  height: 95%;
  @media screen and (max-height: 750px) {
    width: 640px;
    min-height: 600px;
  }
  padding: 10px;
  width: 750px;
  min-height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.95);
  position: absolute;
  display: flex;
  align-items: center;
`;
