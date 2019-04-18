import React from "react";
import ReactDOM from "react-dom";

import Counter from "./count";
import User from "./user";
import Names from "./names";
import Context from "./context";
import CountReducer from "./countReducer";
import Sum from "./sum";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <User /> */}
      {/* <Names /> */}
      {/* <Context /> */}
      {/* <CountReducer /> */}
      <Sum />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
