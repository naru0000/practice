import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭하세요
      </button>
      <h1>{count}</h1>
    </>
  );
};
