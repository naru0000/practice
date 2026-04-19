import { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

// 부모 컴포넌트
function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "blue",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  // const state = useState(); //현재값과 상태변화함수
  // console.log(state);

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭하세요
      </button>
      <h1>{count}</h1> */}
      {/* 자식 컴포넌트
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
      <Button {...buttonProps} />
      <Button>
        <div>자식요소</div>
        <Header />
      </Button> */}
    </>
  );
}

export default App;
