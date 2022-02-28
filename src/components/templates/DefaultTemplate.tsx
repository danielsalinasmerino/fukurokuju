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

export default DefaultTemplate;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 10vh 10vw 10vh 10vw;
`;

const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
`;

const RightContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
