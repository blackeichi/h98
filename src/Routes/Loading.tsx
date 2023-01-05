import React from "react";
import { Icon } from "../Components/Icon";
import {
  Header,
  IconImg,
  InfoText,
  Input,
  RowBox,
} from "../Components/CommonStyle";
import { useForm } from "react-hook-form";
import {
  BootImg,
  Box,
  ColBox,
  Container,
  Image,
  Image2,
  Image3,
  Image4,
  LoadingText,
  LoginBox,
  Text,
  Wrapper,
} from "../Components/LoadingStyle";

export const Loading = () => {
  const { handleSubmit, register } = useForm();
  const onValid = (data: any) => {
    window.localStorage.setItem("h98-username", JSON.stringify(data.username));
    window.location.reload();
  };
  return (
    <Box>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 4 }}
        >
          <BootImg src="/img/catoon.gif" />
          <ColBox>
            <LoadingText>CREATED BY</LoadingText>
            <LoadingText style={{ fontSize: "70px" }}>HAN JW</LoadingText>
          </ColBox>
        </Container>
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.6)
            ),
            url("/img/neonRetro.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LoginBox>
            <Header>
              <RowBox style={{ width: "fit-content", gap: "4px" }}>
                <IconImg src="/img/comIcon.png" />
              </RowBox>
              <Icon text="X" />
            </Header>
            <InfoText style={{ zIndex: 3 }}>
              <img
                style={{ width: "40px", marginRight: "10px" }}
                src="/img/window key.PNG"
              />
              LOGIN PLEASEEEEE
            </InfoText>
            <Wrapper>
              <InfoText>
                <u>U</u>ser name:
              </InfoText>
              <form onSubmit={handleSubmit(onValid)}>
                <Input
                  {...register("username", {
                    required: true,
                  })}
                  name="username"
                  type="text"
                  required
                />
              </form>
            </Wrapper>
          </LoginBox>
          <Image2 />
          <Image3 />
          <Image4 />
          <Image src="/img/paint.png" />
          <Text>GAME!!</Text>
        </Container>
      </Container>
    </Box>
  );
};
