import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // 인수로는 state의 초기값을 받음
  // 첫번째 요소는 현재값, 두번째는 상태변화 함수
  // 리랜더링 => 컴포넌트 값 변화(업데이트)가 되면 다시 리턴을 한다.
  // 왜 상태값을 지정해야 하는가?
  // => 리액트에서는 state값이 변화되어야 랜더링이 다시 된다.

  // 리랜더링 되는 기준
  // 1. state 값 변경시
  // 2. props 값 변경시
  // 3. 부모 컴포넌트 state변경시

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
