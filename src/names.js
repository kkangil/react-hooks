import React from "react";
import usePromise from "./useFunction/usePromise";

const getNames = async () => {
  return new Promise(resolve =>
    setTimeout(() => resolve([{ name: "kkangil" }, { name: "kkangil2" }]), 1000)
  );
};

const Names = () => {
  const { data: names, loading, error } = usePromise({
    promise: getNames,
    initialData: []
  });

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러</div>;

  return (
    <>
      {names.map((row, index) => (
        <div key={index}>{row.name}</div>
      ))}
    </>
  );
};

export default Names;
