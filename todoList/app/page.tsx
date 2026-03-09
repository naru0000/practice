"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [mount, setMount] = useState(false);

  const handleAddTodo = () => {
    if (inputValue === "") {
      return;
    }

    const newTodos = [...todos, inputValue]; // 추가
    setTodos(newTodos);
    setInputValue("");
  };

  const handleDelete = (deleteIndex: number) => {
    const deleteTodos = todos.filter((item, i) => i !== deleteIndex); // 삭제
    setTodos(deleteTodos);
  };

  useEffect(() => {
    if (mount) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, mount]);

  useEffect(() => {
    setMount(true);
    const saved = localStorage.getItem("todos");

    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  console.log("todos", todos);

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(); // 화살표 함수 안에서 직접 실행,우리가 직접 호출
          }
        }}
      />
      <button type="button" onClick={handleAddTodo}>
        추가
      </button>
      <ul>
        {todos.map((item, i) => (
          <li key={i}>
            {item}{" "}
            <button type="button" onClick={() => handleDelete(i)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
