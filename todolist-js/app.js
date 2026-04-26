// 버튼 클릭 → input value 가져오기 → ul에 li 추가 → localStorage에 저장

const plus = document.querySelector(".btn-plus");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

plus.addEventListener("click", () => {
  // 값을 가져온다
  const value = input.value;

  if (value === "") {
    alert("입력해라");
    return;
  }

  // 동적 요소를 만든다
  const li = document.createElement("li");
  const span = document.createElement("span");
  const del = document.createElement("button");

  // 값을 채운다
  span.textContent = value;
  del.textContent = "삭제";

  // 붙인다
  li.appendChild(span);
  li.appendChild(del);
  ul.appendChild(li);

  input.value = "";

  del.addEventListener("click", () => {
    li.remove();
  });
});
