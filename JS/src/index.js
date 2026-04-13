let name = "우리";
name = "민수";

console.log(typeof name);

let num = 100 / 0;

console.log(num); // Infinity

let num2 = NaN;

console.log(typeof num2);

// BigInt

let bigNum1 = 9007199254740991n;
let bigNum2 = BigInt("9007199254740991");

console.log(typeof bigNum1);
console.log(typeof bigNum2);

// null 존재 X 알수없는 값

let num3 = null;

// 오래된 버그 null typeof => objects
console.log(typeof num3);

console.log(num3 === null);

// undefined 값이 할당되지 않았어요

let num4;

console.log(typeof num4);

// 묵시적 형 변환(문자형이 알아서 변환됨)

let num5 = "15";
let num6 = 5;

console.log(num5 / num6);

// 명시적 형 변환

let num7 = "15";
let num8 = 5;

console.log(parseInt(num7) + num8);

// parseInt() 문자형을 숫자형으로 변환해줌

// 전위&후위 연산자

let num9 = 10;

console.log(num9++); // 10 더하거나 빼기 바로 직전의 값 출력
console.log(++num9); // 12 현재 변수에 담긴 값에 1을 더하거나 뺀 결과값을 출력

// 논리 연산자

let isClicked = true;
let isOpened = false;

console.log(!isClicked);
console.log(!isOpened);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// null 병합 연산자 A ?? B

let num10;
let num11 = 10;

console.log(num10 ?? 20);
console.log(num11 ?? 20);

// switch case

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("바나나");
    break;

  case "melon":
    console.log("멜론");
    break;

  case "apple":
    console.log("사과");
    break;

  default:
    console.log("다른 과일");
    break;
}

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3));

// Early return pattern

// function compare(num) {
//   if (num === 0) {
//     console.log("num의 값이 0입니다.");
//   } else if (num < 0) {
//     console.log("num의 값이 0보다 작습니다");
//   } else {
//     if (num >= 10) {
//       console.log("num의 값이 10보다 크거나 같습니다.");
//     } else {
//       console.log("num의 값이 0보다 크고 10보다 작습니다.");
//     }
//   }
// }

function compare(num) {
  if (num === 0) return "num의 값이 0입니다.";
  if (num < 0) return "num의 값이 0보다 작습니다.";
  if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
  return "num의 값이 0보다 크고 10보다 작습니다";
}

console.log(compare(15));

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);

// 전역 지역

let globalNum = 100; // 전역변수

function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}

testFunc();
console.log(globalNum);
// console.log(innerNum);

// 함수 호이스팅

conectStrings("study", "hoisting");

function conectStrings(str1, str2) {
  console.log(str1 + str2);
}

// 변수 호이스팅

console.log(num12);
let num12 = 123;

// 변수가 초기화 될때까지 let = num은 tdz에 있게 된다
