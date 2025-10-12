//함수 선언

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

// 함수 선언이 호출보다 밑에 있어도 적용이 됨(호이스팅)
// -> 끌어올리다라는 뜻
function getArea(width, height) {
  // 매개변수(전달된 인수를 순서대로 저장하는 함수의 변수,매개체 역할을 하는 변수)
  let area = width * height;

  function another() {
    console.log("another");
  } //중첩함수

  another();

  return area; // 함수는 return 이후의 값을 반환하게 됨.(함수의 결과값)

  console.log("hello"); //return에서 함수가 끝나서 출력이 되지 않음
}

let area1 = getArea(40, 40);

getArea(10, 20); // 인수(함수에게 전달한 값)
getArea(30, 20);

console.log(area1);
