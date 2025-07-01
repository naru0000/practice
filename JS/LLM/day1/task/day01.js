// quiz 1 let, const로 각각 name과 age를 넣고 출력

let name = "고우리";
const age = 35;

// quiz 2  let으로 age 25, 30으로 변경후, age변수 출력하기

let age2 = 25;
let age2 = 30;

// quiz 3 객체의 프로퍼티 변경

const user = { name2: "bob" };
user.name2 = "tom";

user.age3 = 1000;

// quiz 4 이름(name)과 나이(age) 변수를 선언하고, 템플릿 리터럴로 "안녕하세요, 저는 name이고 age살입니다."를 출력해보세요.

let name3 = "민수";
let age4 = 20;

console.log(`안녕하세요, 저는 ${name3}이고, ${age4}살입니다.`);

// quiz 5  배열의 첫번째 요소인 'qpple'을 'Orange'로 바꾼후, fruits 변수 출력하기

const fruits = ["apple", "banana"];

fruits[0] = "orange";

// quiz 6 name 변수에 자신의 이름을 넣고, 템플릿 리터럴로 "안녕하세요, name님!"을 출력해보세요.

const name4 = "고우리";

console.log(`안녕하세요, ${name}님!`);

// quiz 7 두수의 합구하기. num1, num2변수에 각각 숫자를 넣고, 두수의 합을 템플릿 리터럴로 출력해 보세요.

let num1 = 3;
let num2 = 5;

let sum = num1 + num2;

console.log(`두 수의 합은 ${sum}입니다.`);

// quiz 8 a, b 변수에 각각 6과 2를 할당하고, 곱셈결과와 나눗셈 결과를 템플릿 리터럴로 출력해보세요.
console.log(`${a} + ${b} = ${a + b}, ${a} * ${b} = ${a * b}, ${a} / ${b} = ${a / b}`);

//x,y는 매개변수, 3,2는 인자

// 더하기 함수로 만들기

function add(x, y) {
    console.log(x + y);
}

add(3, 2);

// 곱하기 함수로 만들기

function multi(x, y) {
    console.log(x * y);
}

multi(3, 2);

// 나누기 함수로 만들기
function div(x, y) {
    console.log(x / y);
}

div(3, 2);
