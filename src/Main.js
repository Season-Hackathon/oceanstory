import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./common/Button";

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.22em;
  color: #000000;
`;

const SubTitle = styled.div`
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 133.19%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22em;
  color: #000000;
`;

const Chracter = styled.div`
  position: relative;
  width: 127px;
`;

/////////////////////////////////////////////////////////////////////////

function Main() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToJoin = () => {
    navigate("/join");
  };

  return (
    <Background>
      <div
        style={{
          flex: "0 0 65%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Title>
          OCEAN
          <br /> STORY
        </Title>
        <SubTitle>
          멸종위기 바다 생물들과
          <br /> 우리의 이야기
        </SubTitle>
        <Chracter>
          <img src={"/img/example.png"} alt="Image" />
        </Chracter>
      </div>

      <div
        style={{
          flex: "0 0 35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button text={"로그인"} width={"70%"} link={`/login`}></Button>
        <Button text={"회원가입"} width={"70%"} link={`/join`}></Button>
        <Button
          text={"편지 쓰러 가기"}
          width={"70%"}
          link={`/write-letter`}
        ></Button>
      </div>
    </Background>
  );
}

export default Main;
