import { useRef, useState } from "react";

// useRef는 레퍼런스 객체를 생성한다.
// 컴포넌트 내부의 변수로 활용 가능하다.
// 어떤 경우에도 리렌더링을 유발하지 않는다.
// 특정 DOM요소에 접근 가능하다.

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inpurRef = useRef();

  // 통합 이벤트 핸들러

  // useref를 쓰지 않고 count를 쓰게 되면 register함수가 계속 재렌더링 되기 때문에 카운트는 계속 1이 나옴
  // let count = 0; count를 함수 외부에 선언하면 되지 않느냐? 라는 질문이 나올 수 있음
  // 그렇게 하면 동작은 되지만 register 컴포넌트를 부모컴포넌트에서 여러개 썼을때 카운트가 똑같은 변수를 공유하게 됨 ex)register a의 제출 버튼 클릭시 register b의 제출 카운트도 올라간다.

  const onChange = (e) => {
    countRef.current++;
    // count++;
    console.log(countRef);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 대괄호 안 프로퍼티는 객체의 키 값으로 쓰임
    });

    console.log(e.target.name, e.target.value);
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 dom에 포커스
      console.log(inpurRef.current);
      inpurRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inpurRef} name="name" value={input.name} onChange={onChange} type="text" placeholder={"이름"} />
        {input.name}
      </div>
      <div>
        <input name="birth" type="date" value={input.birth} onChange={onChange} />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="jp">일본</option>
          <option value="us">미국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
