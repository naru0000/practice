// 1. 객체(현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이)

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(간단)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  name: "고우리", // 이 프로퍼티는 key가 name, value는 고우리
  age: 35,
  hobby: "음악감상",
  extra: {
    game: "zelda",
  },
  "like cat": true, // 띄어쓰기는 따옴표 필요
};

// 3. 객체 프로퍼티 다루는 법
// 3-1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)

let name = person.name; // 점 표기법

console.log(name); // 타입스크립트 경고사항

let age = person["age"]; //쌍따옴표 필수(아니면 변수로 인식)

console.log(age);

let property = "hobby";
let hobby = person[property]; // 동적으로 값 가져오기 가능

console.log(hobby);

// 3-2 새로운 프로퍼티를 추가하는 방법

person.job = "fe developter";
person["favoritefood"] = "떡볶이";

console.log(person);

// 3-3 프로퍼티를 수정하는 방법

person.job = "educator";

console.log(person);

// 3-4 프로퍼티를 삭제하는 방법

delete person.job;
delete person["favoritefood"];
console.log(person);

// 3-5 프로퍼티의 존재 유무를 확인하는 방법

let result1 = "name" in person; // name이라는 프로퍼티가 오른쪽 객체에 있느냐 확인

console.log(result1);

let result2 = "cat" in person;

console.log(result2);
