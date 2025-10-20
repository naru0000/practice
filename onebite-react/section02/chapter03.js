// 1.배열의 구조분해할당

let arr = [1, 2, 3];

// 아래와 같이 하면 불편함
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;

console.log(one, two, three, four);

// 변수를 추가 선언해도 오류가 발생하지는 않음
// 기본값 설정 가능
// 값이 없으면 undefined가 나옴

// 2.객체의 구조분해할당

let person = {
  name: "고우리",
  age: 35,
  hobby: "음악감상",
};

let { name, age: myAge, hobby, extra } = person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
// -> 객체를 넘겼을때만 매개변수 자리에 {}가 가능함

const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
