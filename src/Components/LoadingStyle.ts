import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  font-family: "DungGeunMo";
  color: ${(props) => props.theme.whiteColor};
`;
export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  overflow: hidden;
`;
export const BootImg = styled(motion.img)`
  height: 550px;
  @media screen and (max-width: 1150px) {
    height: 450px;
  }
  @media screen and (max-width: 850px) {
    height: 250px;
  }
`;
export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LoadingText = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 50px;
  text-shadow: 1.5px 1.5px 3px white, -1.5px -1.5px 3px white;
`;
export const LoginBox = styled.div`
  width: 90%;
  max-width: 700px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  box-sizing: border-box;
  padding: 0 10px;
  padding-top: 20px;
  z-index: 3;
  border-radius: 2px;
  border-bottom: 4px solid ${(props) => props.theme.darkGray};
  border-right: 4px solid ${(props) => props.theme.darkGray};
  border-top: 4px solid rgba(255, 255, 255, 0.7);
  border-left: 4px solid rgba(255, 255, 255, 0.7);
  background-color: ${(props) => props.theme.grayColor};
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 3;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 80%;
  min-height: 600px;
  position: absolute;
  z-index: 1;
`;
export const Image2 = styled.div`
  width: 20%;
  height: 30%;
  min-height: 230px;
  min-width: 330px;
  position: absolute;
  left: 57%;
  bottom: 65%;
  border-radius: 10px;
  //z-index: 1;
  //transform: rotate(50deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/img/kokobob.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const Image3 = styled.div`
  width: 20%;
  height: 20%;
  min-height: 270px;
  min-width: 280px;
  position: absolute;
  left: 58%;
  bottom: 10%;
  border-radius: 10px;
  transform: rotate(20deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/img/retro6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const Image4 = styled.div`
  width: 18%;
  height: 50%;
  min-height: 400px;
  min-width: 280px;
  position: absolute;
  left: 25%;
  bottom: 40%;
  border-radius: 10px;
  transform: rotate(-40deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/img/space.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const Text = styled.div`
  color: rgba(255, 255, 255, 0.4);
  text-shadow: 2.5px 2.5px 3px rgba(255, 255, 255, 0.4),
    -2.5px -2.5px 3px rgba(255, 255, 255, 0.4);
  font-size: 100px;
  position: absolute;
  font-weight: bold;
  background-color: black;
  padding: 20px;
  border: 5px solid black;
  left: 20%;
  z-index: 0;
  bottom: 3%;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
