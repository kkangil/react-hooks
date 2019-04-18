import React, { useState, useMemo, useCallback, useRef } from "react";

const Sum = () => {
  const [num, setNum] = useState("");
  const [numList, setNumList] = useState([]);
  const inputElement = useRef(null);

  const handleChange = useCallback(e => {
    setNum(e.target.value);
  }, []);

  const handleClickAdd = useCallback(() => {
    if (+num) {
      const newNumList = [...numList];
      newNumList.push(+num);
      setNumList(newNumList);
      setNum("");
      inputElement.current.focus();
    }
  }, [numList, num]);

  const sumValue = useMemo(() => {
    if (!numList.length) return 0;
    const sum = numList.reduce((a, b) => a + b);
    return sum;
  }, [numList]);

  return (
    <div>
      Sum
      <div>
        <input value={num} onChange={handleChange} ref={inputElement} />
        <button onClick={handleClickAdd}>add</button>
      </div>
      <div>number list: {numList.join(", ")}</div>
      <div>number total: {sumValue}</div>
    </div>
  );
};

export default Sum;
