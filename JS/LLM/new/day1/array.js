// 이름만 뽑아서 [고스트,이령,카멜] 이라는 새로운 배열 만들기

const users = [
  { id: 1, name: "고스트", age: 20 },
  { id: 2, name: "이령", age: 22 },
  { id: 3, name: "카멜", age: 19 },
];

const userNames = users.map((users) => users.name);
console.log(userNames);

// '이령'의 나이 22를 출력하는 코드를 한 줄 작성해라.

const userIr = users.map((item) => item.age)[1];

// 더 좋은답(특정 객체에 있는 값만 찾을 거니까 굳이 map을 쓸 필요 없음)
const userIr2 = users[1].age;

console.log(userIr);
console.log(userIr2);

// 나이가 20살 이상인 성인만 걸러내서 새로운 배열 adults 만들기

const adults = users.filter((item) => item.age >= 20);
console.log(adults);

// 나이가 20살 이상인 사람들의 이름만 뽑아서 '000님'이라는 문자열이 담긴 새로운 배열 adultNames 만들기

const adultNames = users.filter((item) => item.age >= 20).map((item) => `${item.name}님`);
console.log(adultNames);
