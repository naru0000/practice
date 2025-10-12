// 1.상수 객체(상수에 저장해놓은 객체)

const animal = {
  type: "고양이",
  name: "나비",
  color: "samsack",
};

// animal = { a: 1 }; //안되는 이유는 상수는 값을 수정할 수 없기 때문

// 프로퍼티와 관련된 아래 기능은 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
  name: "고우리",
  //메서드 선언
  sayhi() {
    console.log("안녕!");
  },
};

person.sayhi();
person["sayhi"]();
