import React from "react";
import styled from "styled-components";
import uwu from "./assets/5754350.png"; // Tell webpack this JS file uses this image

const App = () => {
  return (
    <div>
      <Wrapper>
        <Right>
          {" "}
          <Uwu src={uwu} />
        </Right>
        <Left>
          <Pedro>Oye</Pedro>
        </Left>
      </Wrapper>
      <Wrapper2>La influencia Gente de bien¡</Wrapper2>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
  background-color: lightgreen;
`;

const Wrapper2 = styled.div`
  min-height: 100vh;
  width: 100%;
  background: lightblue;
  padding: 8px;
`;

const Uwu = styled.img`
  width: 100%;
`;

const Pedro = styled.div`
  background: pink;
`;

const Right = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd580;
  margin-left: 5%;
`;
