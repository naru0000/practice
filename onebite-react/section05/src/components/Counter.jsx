import { useState, useRef, useEffect } from "react";

// 클릭 → setCount(1) → 리렌더링 → 화면 업데이트 → useEffect 실행 → prevCountRef 업데이트

const Counter = () => {
  const [count, setCount] = useState(0); // 현재값,화면에 보임
  const prevCountRef = useRef(0); // 이전값,화면에 안보임

  console.log("현재값:", count, "이전값:", prevCountRef);

  const HandleCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <button type="button" onClick={HandleCounter}>
      카운트 클릭
    </button>
  );
};

export default Counter;
