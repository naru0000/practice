//동기란?
// -> 여러개의 작업을 순서대로 처리

//비동기란?
// -> 여러개의 작업을 순서대로 처리하지 않음
// 자바스크립트 엔진이 아닌 Web APIS라는 곳에서 실행됨

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
