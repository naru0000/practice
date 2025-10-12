// 1. 스코프(범위)
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서 접근 가능

let a = 1; // 완전한 바깥 위치,어디에서나 접근 가능

function funcA() {
  let b = 2;
  console.log(a);

  function funcB() {
    console.log("funcb");
  }
}

funcA();
// funcB(); 접근 안됨

// console.log(b); b가 지역 스코프이기 때문에 접근 안됨

if (true) {
  let c = 1; // 지역 스코프
  function funcC() {
    console.log("funcC야");
  }
}

// console.log(c);  접근 안됨

for (let i = 0; i < 2; i++) {
  let d = 1;
  function funcD() {
    console.log("funcD야");
  }
}

// console.log(d); 접근 안됨

// 함수를 반복문,조건문 안에 썼을때는 지역스코프가 아님
// 쓰는 경우가 거의 없으므로 참고만 해둘 것
funcC();
funcD();
