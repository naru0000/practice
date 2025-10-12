// 1. 대입 연산자

let 우리 = "개발자";

// 2. 산술 연산자

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; //곱셉연산자 우선
let num7 = (1 + 2) * 10; //덧셈연산자 우선

console.log(num6);
console.log(num7);

// 3. 복합 대입 연산자(산술+대입)
let num8 = 20;
num8 += 20;

console.log(num8);

// 4. 증감 연산자(1씩 늘리거나 1씩 줄일때 사용)

let num9 = 1;
console.log(++num9); // 전위 연산
num9++; // 후위 연산을 쓰면 이 라인이 끝나고나서야 1이 추가됨

console.log(num9);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6.비교 연산자

let comp1 = 1 === 2; //자료형(type)까지 같은지 확인
let comp2 = 1 !== 2; //비동등 비교 연산자
let comp3 = 2 > 1;

console.log(comp1, comp2, comp3);
