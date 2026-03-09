import "./App.css";
import Button from "./components/Button";
import HookExam from "./components/HookExam";
import Register from "./components/Register";
import Header from "./components/Header";
import { useState } from "react";

export const Bulb = () => {
  const [light, setLight] = useState("off");

  console.log(light);
  return (
    <>
      {light === "on" ? <h1>on</h1> : <h1>off</h1>}

      <button type="button" onClick={() => setLight(light === "on" ? "off" : "on")}>
        {light === "on" ? "끄기" : "켜기"}
      </button>
    </>
  );
};

export const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        증가
      </button>
      <h1>{count}</h1>
    </>
  );
};

function App() {
  // 간단한 회원가입 폼
  // 1. 이름
  // 2. 생년월일
  // 3. 국적
  // 4. 자기소개

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* <div>
        <Bulb />
        <CounterComponent />
      </div> */}

      {/* <Button {...buttonProps}>
        <Header />
      </Button>
      <Button text={"카페"} color={"black"} />
      <Button text={"블로그"} color={"blue"} /> */}
    </>
  );
}

export default App;
