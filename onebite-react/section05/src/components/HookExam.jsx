// 3가지 훅 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다
// 3. 나만의 훅, 커스텀 훅을 직접 만들 수 있다(함수이름 앞에 'use'를 써야함)
// => 보통 hooks폴더에 만들어서 사용

import { useState } from "react";

function useInput() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();

  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
