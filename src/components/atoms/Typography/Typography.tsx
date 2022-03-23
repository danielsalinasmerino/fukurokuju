import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";

export const enum TypographyStyle {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
  B1 = "B1",
  B2 = "B2",
  CP = "CP",
  OL = "OL",
}

const TypographyStyles = {
  H1: {
    "--fontSize": 96 + "px",
    fontWeight: "bold",
  },
  H2: {
    "--fontSize": 60 + "px",
    fontWeight: "bold",
  },
  H3: {
    "--fontSize": 48 + "px",
    fontWeight: "bold",
  },
  H4: {
    "--fontSize": 34 + "px",
    fontWeight: "bold",
  },
  H5: {
    "--fontSize": 24 + "px",
  },
  H6: {
    "--fontSize": 20 + "px",
  },
  B1: {
    "--fontSize": 16 + "px",
  },
  B2: {
    "--fontSize": 14 + "px",
  },
  CP: {
    "--fontSize": 12 + "px",
  },
  OL: {
    "--fontSizefontSize": 10 + "px",
  },
};

interface TypographyProps {
  text: string;
  typographyStyle?: TypographyStyle;
  typewriterFamily?: boolean;
}

const Typography: FC<TypographyProps> = ({
  text,
  typographyStyle = TypographyStyle.B1,
  typewriterFamily = false,
}) => {
  const styles = TypographyStyles[typographyStyle] as CSSProperties;

  let Component = typewriterFamily ? TypographyTypewriter : TypographyWrapper;
  return <Component style={styles}>{text}</Component>;
};

const TypographyWrapper = styled.label`
  font-size: var(--fontSize);
`;

const TypographyTypewriter = styled(TypographyWrapper)`
  font-family: "Special Elite", cursive;
`;

export default Typography;
