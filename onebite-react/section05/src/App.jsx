import "./App.css";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}

      {/* 스프레드연산자를 이용해서 모든 props를 하나로 던져줄 수 있다. */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      {/* 자식 요소를 자식 컴포넌트에 전달할 수 있다/ */}
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
