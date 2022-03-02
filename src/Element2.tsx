import React from "react";
import { useTranslation } from "react-i18next";

const Element2 = () => {
  const { t } = useTranslation();

  return (
    <p>
      {t("main.content.line1")}
      <br />
      {t("main.content.line2")}
      <br />
      {t("main.content.line3")}
    </p>
  );
};

export default Element2;
