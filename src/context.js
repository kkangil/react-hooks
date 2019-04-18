import React, { createContext, useContext } from "react";

const backgroundColorContext = createContext("black");

const Context = () => {
  const backgroundColor = useContext(backgroundColorContext);
  const style = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: backgroundColor
  };
  return <div style={style} />;
};

export default Context;
