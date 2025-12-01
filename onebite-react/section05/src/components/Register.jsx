import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 통합 이벤트 핸들러

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 대괄호 안 프로퍼티는 객체의 키 값으로 쓰임
    });

    console.log(e.target.name, e.target.value);
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} type="text" placeholder={"이름"} />
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
    </div>
  );
};

export default Register;
