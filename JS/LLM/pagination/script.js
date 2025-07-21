// script.js

// fetch: 식당(서버) 주방에 주문서를 넣는 것.
// await: 주문한 음식이 나올 때까지 착하게 기다리는 것.
// async: "저는 이제부터 주문하고 기다리는 일을 할 거예요!" 라고 함수에 붙여주는 꼬리표. (await는 async 꼬리표가 붙은 함수 안에서만 쓸 수 있어요!)
// try...catch: 혹시나 주문이 잘못되거나(서버 오류) 재료가 다 떨어졌을(데이터 없음) 때를 대비하는 비상 대책.

// 1. 필요한 HTML 요소들을 미리 찾아놓습니다.
const productsList = document.querySelector("#products-list");
const paginationContainer = document.querySelector("#pagination");

// 2. 페이지 상태를 기억할 변수들을 만듭니다.
let currentPage = 1; // 현재 페이지 번호
const itemsPerPage = 10; // 한 페이지에 보여줄 상품 수

async function fetchDisplayProds() {
  try {
    // 스킵을 만들어서 현재페이지에 맞게 계산
    const skip = (currentPage - 1) * itemsPerPage;

    // 서버에서 데이터를 불러온다
    const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`);

    // 객체로 파싱한다
    const data = await response.json();

    // ★★★ 이 부분을 추가해주세요! ★★★
    console.log("서버에서 받은 상품 데이터:", data.products);

    // 에러 처리 / product가 없는 경우
    if (!data.products) {
      productsList.innerHTML = `<div>상품을 불러올 수 없습니다.</div>`;
    }

    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    // 렌더링
    displayProds(data.products);
    displayPagination(data.total);
  } catch (error) {
    productsList.innerHTML = `<div>오류가 발생했습니다.</div>`;
  }
}

// 상품 목록 그리기
function displayProds(products) {
  productsList.innerHTML = products
    .map(
      (product) =>
        `
  <div class="product-card">
    <img src="${product.thumbnail}" alt="${product.title}">
    <h4>${product.title}</h4>
    <p>${product.price}</p>
  </div>
  `
    )
    .join("");
}

// 페이지네이션

// 페이지 그룹 상태를 기억할 변수를 추가합니다.
const pageGroupSize = 10; // 한 그룹에 보여줄 페이지 버튼 수

// 현재 내가 보고 있는 페이지를 기준으로 알맞은 페이지 번호를 화면에 그려라

// function 페이지네이션(전체상품)

function displayPagination(totalItems) {
  // const 전체 페이지 = Math.ceil(전체상품 / 페이지당 상품 수)
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = ""; // 페이지 버튼 영역 비우기

  // 현재 페이지가 속한 그룹을 계산합니다.
  // 예: currentPage가 13이면, pageGroup은 2가 됩니다. (11~20 그룹)
  const pageGroup = Math.ceil(currentPage / pageGroupSize);

  // 현재 그룹의 마지막 페이지와 시작 페이지를 계산합니다.
  let lastPageInGroup = pageGroup * pageGroupSize;
  let startPageInGroup = lastPageInGroup - pageGroupSize + 1;

  // 만약 마지막 페이지가 전체 페이지 수보다 크면, 마지막 페이지를 전체 페이지 수로 맞춥니다.
  if (lastPageInGroup > totalPages) {
    lastPageInGroup = totalPages;
  }

  // '< 이전' 버튼 만들기
  if (pageGroup > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.classList.add("page-btn");
    prevButton.addEventListener("click", () => {
      // 이전 그룹의 첫 번째 페이지로 이동
      currentPage = startPageInGroup - 1;
      fetchDisplayProds();
    });
    paginationContainer.appendChild(prevButton);
  }

  // 페이지 번호 버튼 만들기 (현재 그룹에 대해서만)
  for (let i = startPageInGroup; i <= lastPageInGroup; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("page-btn");

    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;
      fetchDisplayProds();
    });

    paginationContainer.appendChild(pageButton);
  }

  // '> 다음' 버튼 만들기
  if (lastPageInGroup < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.classList.add("page-btn");
    nextButton.addEventListener("click", () => {
      // 다음 그룹의 첫 번째 페이지로 이동
      currentPage = lastPageInGroup + 1;
      fetchDisplayProds();
    });
    paginationContainer.appendChild(nextButton);
  }
}

fetchDisplayProds();
