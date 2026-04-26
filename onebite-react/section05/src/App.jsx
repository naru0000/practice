import "./App.css";
import { Bulb } from "./components/Bulb";
import { Counter } from "./components/Counter";
import { Register } from "./components/Register";
import HookExam from "./components/HookExam";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

// const Bulb = () => {
//   const [light, setLight] = useState("OFF");
//   console.log("bulb");
//   return (
//     <>
//       <div>
//         {light === "ON" ? (
//           <h1 style={{ backgroundColor: "orange" }}>ON</h1>
//         ) : (
//           <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
//         )}
//       </div>
//       <button
//         onClick={() => {
//           setLight(light === "ON" ? "OFF" : "ON");
//         }}
//       >
//         {light === "ON" ? "끄기" : "켜기"}
//       </button>
//     </>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         클릭하세요
//       </button>
//       <h1>{count}</h1>
//     </>
//   );
// };

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

  // 회원가입 폼 만들기
  // 이름,생년월일,국적,자기소개

  return (
    <>
      <Register />
      {/* <HookExam /> */}
      {/* <Bulb />
      <Counter /> */}

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
