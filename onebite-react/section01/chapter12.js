// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA; //함수를 변수에 저장할 수 있음

console.log(varA);

varA(); //함수 호출하듯이 사용할 수 있음

let varB = function () {
  console.log("funcB");
}; //함수 선언식이 아님(값으로서 함수를 생성함),함수표현식,호이스팅이 되지 않음

varB();

// 2. 화살표 함수

// let varC = (value) => value + 1;

// 추가적인 작업이 필요할때
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
