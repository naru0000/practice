// 1. hook은 반드시 함수 컴포넌트거나 커스텀 훅 내부에서만 호출 가능\
// 2. 조건부로 호출될 수는 없다
// 3. (핵심) 커스텀훅을 직접 만들 수 있다
// 4. 커스텀훅은 앞에 'use'를 붙여줘야함

import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input type="text" onChange={onChange} value={input} />
      {input}
    </div>
  );
};

export default HookExam;
