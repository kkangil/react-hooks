import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "HANDLE_CHANGE":
      return { ...state, [action.target.name]: action.target.value };
    default:
      return state;
  }
};

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "",
    nickname: ""
  });

  const handleChange = e => {
    dispatch({ type: "HANDLE_CHANGE", target: e.target });
  };

  return (
    <div>
      <p>current count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrease</button>
      <div>
        <input name="name" value={state.name} onChange={handleChange} />
        <input name="name" value={state.nickname} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CountReducer;
