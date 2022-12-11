import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const BootImg = styled(motion.img)`
  height: 800px;
  @media screen and (max-width: 1150px) {
    height: 600px;
  }
  @media screen and (max-width: 850px) {
    height: 350px;
  }
`;

export const Loading = () => {
  return (
    <Box>
      <Container>
        <BootImg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2 }}
          src="/img/window booting.gif"
        />
      </Container>
    </Box>
  );
};
