import { use, useRef, useState } from "react";

export const Register = () => {
  // 객체 형태로 만들어서 하나의 state로 만든다
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // let count = 0,count++ 이 안되는 이유(리랜더링되서 값이 변하지 않음)
  // let count = 0을 Register 함수 밖에 두면?
  // Register 컴포넌트를 여러개 쓸때 하나의 변수를 공유하게 되어 값도 공유하게 되버림

  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // 통합 이벤트 핸들러
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value }); // e.target.name => property의 key
  };

  const onSubmit = () => {
    if (input.name === "") {
      console.log(inputRef.current);
      // 이름을 입력하는 dom요소에 focus
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input, // 관련 없는 값이 유지되기 위해
  //     name: e.target.value, // 변경할 값
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input, // 관련 없는 값이 유지되기 위해
  //     birth: e.target.value, // 변경할 값
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input, // 관련 없는 값이 유지되기 위해
  //     country: e.target.value, // 변경할 값
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input, // 관련 없는 값이 유지되기 위해
  //     bio: e.target.value, // 변경할 값
  //   });
  // };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} type="text" placeholder={"이름"} onChange={onChange} />
        {input.name}
      </div>
      <div>
        <input name="birth" type="date" onChange={onChange} value={input.birth} />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio}></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
