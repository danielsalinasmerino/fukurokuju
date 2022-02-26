import React from "react";
import styled from "styled-components";
import logo_example from "./assets/5754350.png";
import Element from "./Element";

const App = () => {
  return (
    <div>
      <Wrapper>
        <LeftContent>
          {" "}
          <FullWithImage src={logo_example} />
        </LeftContent>
        <RightContent>
          <Element />
        </RightContent>
      </Wrapper>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 10vh 10vw 10vh 10vw;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

const FullWithImage = styled.img`
  width: 100%;
`;
