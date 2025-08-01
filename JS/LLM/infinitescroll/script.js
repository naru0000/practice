const productsList = document.querySelector("#products-list");
const loader = document.querySelector("#loader");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

let currentPage = 1;
const itemsPerPage = 20;
// 신호등
let isLoading = false;

// 현재 검색어를 기억할 변수
let currentQuery = "";

async function scrollProducts() {
  // 신호등이 빨간불이면 바로 리턴
  if (isLoading) return;
  // 신호등 빨간불로 바꿈
  isLoading = true;
  // 로딩 스피너 보이기
  loader.style.display = "block";

  try {
    // 스킵할 상품 갯수 구하기(페이지 버튼 클릭시)
    const skip = (currentPage - 1) * itemsPerPage;
    let url = ""; // url을 담을 변수

    if (currentQuery) {
      // 검색어가 있으면 검색 API 주소를 사용한다
      url = `https://dummyjson.com/products/search?q=${currentQuery}&limit=${itemsPerPage}&skip=${skip}`;
    } else {
      // 검색어가 없으면 기존의 상품 목록 주소 사용
      url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;
    }

    console.log("요청하는 URL:", url); // 디버깅을 위해 URL을 출력해봅시다.

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      // fetch는 성공했으나, 서버가 에러 코드를 보낸 경우 (예: 404, 500)
      console.error("서버 응답 오류:", data.message);
      return;
    }

    if (data.products && data.products.length > 0) {
      // ★★★★★ 수정된 핵심 부분 ★★★★★
      // map과 join으로 HTML 문자열을 먼저 완성하고, 그 결과를 innerHTML에 더합니다.
      productsList.innerHTML += data.products
        .map(
          (product) => `
        <div class="product-card">
          <img src="${product.thumbnail}" alt="${product.title}">
          <h4>${product.title}</h4>
          <p>$${product.price}</p>
        </div>
        `
        )
        .join("");
      currentPage++;
    }
  } catch (error) {
    console.error("데이터를 가져오는 도중 네트워크 오류 발생", error);
  } finally {
    isLoading = false; // 요청 끝
    loader.style.display = "none"; // 로딩 스피너 숨기기
  }
}

window.addEventListener("scroll", function () {
  // scrollProducts 함수 내부에서 isLoading 체크하므로 여기서는 return 쓸필요 없음
  // 사용자의 스크롤 높이 > 페이지 높이일 때 무한스크롤 함수 호출(여유 공간으로 100px 남김)
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    scrollProducts();
  }
});

searchButton.addEventListener("click", function () {
  const newQuery = searchInput.value.trim(); // trim으로 양쪽 공백 제거

  // 새로운 검색 과정
  currentQuery = newQuery; // 새로운 검색어 저장
  productsList.innerHTML = ""; // 기존 상품 목록 모두 지움
  currentPage = 1; // 페이지 번호 초기화

  // 새로운 검색결과 페이지 호출
  scrollProducts();
});

// 첫 페이지 로드를 위해 최초 1회 호출
scrollProducts();
