import { useState, useEffect } from "react";
import "./App.css";
import Controllers from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count}, input: ${input}`);
  }, [count, input]); // 의존성 배열, 디펜던시..dependency array, deps

  const onClickButton = (value) => {
    setCount(count + value);
    // 여기에 console.log를 넣어서 useeffect 안쓰고 카운트를 체크하면 되지 않을까? 같은 질문이 나올 수 있음
    // setCount와 같은 상태변화함수는 비동기로 동작함
    // 변경된 state의 값을 사용해서 side effect 같은 부가적인 작업을 하려면 useeffect를 이용해야 한다.
  };

  return (
    <div className="App">
      <h1>simple counter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controllers onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
