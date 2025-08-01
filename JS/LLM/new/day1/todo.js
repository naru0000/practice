const initialTodos = [
  { id: 1, text: "자바스크립트 공부", done: true },
  { id: 2, text: "배열 메서드 복습", done: false },
  { id: 3, text: "DOM 조작 연습", done: false },
  { id: 4, text: "리액트 강의 듣기", done: true },
  { id: 5, text: "프로젝트 구상", done: false },
];

const list = document.querySelector("#todo-list");
const falseDone = initialTodos
  .filter((item) => item.done === false)
  .map((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    li.addEventListener("click", (e) => {
      e.target.remove();
    });
    return li;
  });

list.append(...falseDone);

// falseDone.forEach((item) => {
//   const li = document.createElement("li");
//   list.appendChild(li);
//   li.textContent = item.text;
//   li.addEventListener("click", (e) => {
//     e.target.style.display = "none";
//     e.stopPropagation();
//   });
// });
