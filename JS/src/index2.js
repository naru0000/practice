// 함수 표현식을 화살표함수로
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

// 콜백함수 다른 함수의 매개변수로 넘겨주는 함수

// const caculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// };

// const printResult = (result) => {
//   console.log("결과:" + result);
// };

// const doubleResult = (result) => {
//   console.log("결과:" + result * 2);
// };

// caculate(5, 3, printResult);
// caculate(5, 3, doubleResult);

// const testFunc = (callback) => {
//   callback();
// };

// testFunc(() => {
//   console.log("콜백 함수 테스트");
// });

// testFunc(function () {
//   console.log("콜백 함수 테스트");
// });

const greet = (name, callback) => {
  callback(name);
};

const sayHello = (name) => {
  console.log(`안녕, [${name}]!`);
};

const sayBye = (name) => {
  console.log(`잘가, [${name}]!`);
};

greet("철수", sayHello);
greet("철수", sayBye);

// 콜백함수 연습할 것

// 객체

// 생성자 함수, 리터럴

// let object = new Object();
let object = {};
console.log(object);

let book = {
  title: "어린왕자",
  author: "생텍쥐베리",
  category: "소설",
  year: undefined,
  color: function () {
    console.log("orange");
  },
};

// 객체 프로퍼티 사용하는 방법

let car = {
  name: "테슬라",
  model: "모델3",
  color: "white",
};

console.log(car.name);
console.log(car["name"]);

const getValue = (model) => {
  console.log(car[model]);
};

getValue("model");

// 객체 값 추가

let cat = {
  age: 2,
};

cat.name = "야옹이";
cat["color"] = "white";

delete cat.name;

console.log(cat);

const person = {
  name: "해리",
  age: 23,
  print: function () {
    console.log(`${this.name},너는 마법사야.`);
  }, // this사용시 화살표 함수 X,this가 window 객체를 가르킴
};

person.print();
person["print"]();

// 배열

// let arr = new Array(1, 2, 3);
// let arr2 = new Array(3);

let arr1 = [1, 2, 3];
let arr2 = [3];

// 배열 추가(push,unsfhit)
console.log(arr1);
console.log(arr2);
arr1.push(4);
arr2.unshift(0);
console.log(arr1);
console.log(arr2);

// 배열 수정
const animal = ["cat", "dog", "hamster"];

// animal = ["cat", "rabbit", "hamster"];
animal[2] = "parrot";

// const 사용시 배열 자체만 수정하는 게 아니면 배열의 요소는 수정 가능
console.log(animal);

// 배열 삭제(pop,shift,splice)

animal.splice(1, 2);
animal.push("dragon", "butterfly");
console.log(animal);
console.log(animal.length);

// 생성자 함수
// 동일한 구조의 객체 쉽게 생성
// 코드의 재사용성 높아짐
// 반복되는 코드 작성 감소

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  };
}

// new 키워드를 생성해 생성자 함수를 호출한 값,새로 생성한 객체를 인스턴스라고 한다.
const person1 = new Person("홍길동", 30, "Manager");

console.log(person1);
