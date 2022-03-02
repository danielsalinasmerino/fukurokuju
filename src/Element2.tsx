import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "./components/atoms/Typography";

const Element2 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <Typography text={t("main.content.line1")} />
      <br />
      <Typography text={t("main.content.line2")} />
      <br />
      <Typography text={t("main.content.line3")} />
    </p>
  );
};

export default Element2;
