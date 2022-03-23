import React, { FC } from "react";
import styled from "styled-components";

export type DefaultTemplateProps = {
  leftContent: () => JSX.Element;
  rightContent: () => JSX.Element;
};

const DefaultTemplate: FC<DefaultTemplateProps> = ({
  leftContent,
  rightContent,
}) => {
  const LeftContent = leftContent;
  const RightContent = rightContent;

  return (
    <Wrapper>
      <LeftContentWrapper>
        <LeftContent />
      </LeftContentWrapper>
      <RightContentWrapper>
        <RightContent />
      </RightContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  padding: 10vh 10vw 10vh 10vw;
  @media (min-width: 320px) and (max-width: 480px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }
`;

const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
  }
`;

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
  }
`;

export default DefaultTemplate;
