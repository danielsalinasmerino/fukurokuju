import React from "react";
import DefaultTemplate from "./components/templates/DefaultTemplate";
import Element from "./Element";

const App = () => {
  return (
    <DefaultTemplate
      leftContent={() => <Element />}
      rightContent={() => <Element />}
    />
  );
};

export default App;
