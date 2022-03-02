import React, { FC } from "react";
import styled from "styled-components";

export type TypographyProps = { text: string };

const Typography: FC<TypographyProps> = ({ text }) => {
  return <TypographyWrapper>{text}</TypographyWrapper>;
};

const TypographyWrapper = styled.label``;

export default Typography;
