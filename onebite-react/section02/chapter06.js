// 반복문으로 배열과 객체 순회하기
// 순회란? 배열,객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 1. 배열 순회

let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.clear();

// 1-2. for of 반복문(index 저장 X,배열안의 값만 순회)

for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회

let person = {
  name: "고우리",
  age: 35,
};

// 2.1 Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환
// 이후 위의 for문,for of 반복문 사용해주면 됨

let keys = Object.keys(person);
for (let key of keys) {
  console.log(key);
}

// 2.2 Object.values 사용
// -> 객체에서 value값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
// -> 객체 순회용으로 나온 반복문

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
