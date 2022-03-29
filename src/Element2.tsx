import React from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./components/atoms/FadeIn";
import Typography, { TypographyStyle } from "./components/atoms/Typography";

const Element2 = () => {
  const { t } = useTranslation();

  const fadeInDuration = 4000;

  const paragraphs = [
    { text: t("main.content.line1"), duration: fadeInDuration, delay: 0 },
    {
      text: t("main.content.line2"),
      duration: fadeInDuration,
      delay: fadeInDuration / 2,
    },
    {
      text: t("main.content.line3"),
      duration: fadeInDuration,
      delay: fadeInDuration,
    },
  ];

  return (
    <p>
      <Typography
        text={t("main.title")}
        typographyStyle={TypographyStyle.H4}
        typewriterFamily
      />
      {paragraphs.map(({ text, duration, delay }) => {
        return (
          <>
            <br />
            <FadeIn duration={duration} delay={delay}>
              <Typography text={text} typographyStyle={TypographyStyle.H5} />
            </FadeIn>
          </>
        );
      })}
    </p>
  );
};

export default Element2;
