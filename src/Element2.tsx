import React from "react";
import { useTranslation } from "react-i18next";
import Typography, { TypographyStyle } from "./components/atoms/Typography";

const Element2 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <Typography
        text={t("main.title")}
        typographyStyle={TypographyStyle.H4}
        typewriterFamily
      />
      <br />
      <Typography
        text={t("main.content.line1")}
        typographyStyle={TypographyStyle.H5}
      />
      <br />
      <Typography
        text={t("main.content.line2")}
        typographyStyle={TypographyStyle.H5}
      />
      <br />
      <Typography
        text={t("main.content.line3")}
        typographyStyle={TypographyStyle.H5}
      />
    </p>
  );
};

export default Element2;
