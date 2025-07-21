// 서버에서 이런 모양의 데이터를 받았다고 상상해봐요!
// 배열 안에 객체들이 들어있는 구조. 아주 중요해요!

// fetch: 식당(서버) 주방에 주문서를 넣는 것.
// await: 주문한 음식이 나올 때까지 착하게 기다리는 것.
// async: "저는 이제부터 주문하고 기다리는 일을 할 거예요!" 라고 함수에 붙여주는 꼬리표. (await는 async 꼬리표가 붙은 함수 안에서만 쓸 수 있어요!)
// try...catch: 혹시나 주문이 잘못되거나(서버 오류) 재료가 다 떨어졌을(데이터 없음) 때를 대비하는 비상 대책.

// script.js

// script.js

async function fetchAndDisplayProducts() {
  try {
    // 서버에 상품 데이터를 요청하고, 응답이 올 때까지 기다립니다.
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    const products = data.products;

    // 실제 상품 목록은 data.products 배열에 들어있어요.

    const prodList = document.querySelector(".animal-list");

    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    // 그림을 그릴 공간(HTML 요소)을 찾습니다.

    const prodArray = products.map((product) => {
      return `
        <li class="animal-item">
            <img src="${product.thumbnail}" alt="${product.title}" width="100">
            <h3>${product.title}</h3>
            <p>가격: $${product.price}</p>
        </li>
      `;
    });

    prodList.innerHTML = prodArray.join("");

    // map을 이용해 products 배열의 각 상품을 HTML 태그로 변환합니다.
    // animal -> product, animal.name -> product.title 등으로 바꿔줘야 해요!
    // 변환된 HTML 배열을 하나의 문자열로 합치고, 화면에 그립니다.
  } catch (error) {
    prodList.innerHTML = `<li>에러가 발생했습니다.</li>`;
  }
}

fetchAndDisplayProducts();
// 함수를 실행합니다!
