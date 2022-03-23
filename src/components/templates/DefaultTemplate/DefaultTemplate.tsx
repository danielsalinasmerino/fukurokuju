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
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  @media (max-width: 768px) {
    width: 100%;
    background-color: red;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    background-color: red;
  }
`;

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default DefaultTemplate;

/* 320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens */
