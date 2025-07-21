// script.js

const productsList = document.querySelector("#products-list");
const loader = document.querySelector("#loader");

let currentPage = 1;
const itemsPerPage = 10;
let isLoading = false; // ★★★★★ 매우 중요!

async function scrollProducts() {
  // 신호등이 빨간불이면 바로 리턴
  if (isLoading) return;

  // 신호등 빨간불로 바꿈
  isLoading = true;

  // 로딩 스피너 보이기
  loader.style.display = "block";

  try {
  } catch {}
}
