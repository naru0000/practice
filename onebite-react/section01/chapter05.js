// 원시타입
// 1. Number Type

let num = 27;
let num2 = 1.5;
let num3 = -4;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2); // 모듈러 연산(나머지 구하는)

let inf = Infinity;
let mIntf = -Infinity;

let nan = NaN; // 수치 연산 실패 결과값

console.log(1 * "hello");

// 2. String Type

let myName = "고우리";
let myLocation = "제주";
let introduce = myName + myLocation; // 문자열 결합
let introduceText = `${myName}는 ${myLocation}에 살고 있습니다.`; // 템플릿 리터럴 문법

console.log(introduce);
console.log(introduceText);

// 3. Boolean Type

let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(아무것도 없다,명시적으로 변수에 할당해줘야 하는 값)

let empty = null;

// 5. Undefined Type(변수 선언후 아무값도 할당하지 않았을때 자동으로 들어감)

let none;

console.log(none);
