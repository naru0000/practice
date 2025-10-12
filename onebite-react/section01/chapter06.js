// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // 묵시적 형 변환

console.log(result); // 불가능한 연산을 할 때 자바스크립트 엔진이 알아서 바꿈

// 2. 명시적 형 변환
// 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 암시
// 문자열 -> 숫자

let str1 = "10";

let strToNumber = Number(str1);

console.log(10 + strToNumber);

let str2 = "10개";

let str2ToNumber = parseInt(str2);

console.log(typeof str2);

let num1 = 20;
let numToStr = String(num1);

console.log(numToStr + "입니다");
