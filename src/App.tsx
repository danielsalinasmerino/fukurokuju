import React from "react";
import DefaultTemplate from "./components/templates/DefaultTemplate";
import Element from "./Element";
import Element2 from "./Element2";

const App = () => {
  return (
    <DefaultTemplate
      leftContent={() => <Element />}
      rightContent={() => <Element2 />}
    />
  );
};

export default App;
