import { useState } from "react";
import "./App.css";
import Controllers from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>simple counter</h1>
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
