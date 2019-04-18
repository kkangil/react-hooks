import React, { useState } from "react";
import useInputOption from "./useFunction/useInputOption";

const Counter = props => {
  const [count, setCount] = useState(0);
  const nameInputOption = useInputOption("");
  const nickInputOption = useInputOption("");

  return (
    <div>
      <input {...nameInputOption} />
      <input {...nickInputOption} />
      <p>
        {nameInputOption.value ? `${nameInputOption.value}'s` : ""} current
        count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
};

export default Counter;
