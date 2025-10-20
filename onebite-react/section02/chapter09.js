// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소만 필터링 해서 새로운 배열로 반환

let arr1 = [
  { name: "고우리", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(item);
  return item * 2;
});

console.log(mapResult);

let names = arr1.map((item) => item.name);

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드(기존 배열을, 새 배열 아님)
// 숫자일때는 정렬이 안됨

let arr3 = ["b", "a", "c"];

let arr4 = [10, 1, 2];

arr3.sort();
console.log(arr3);

arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr4);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드

let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();

console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드

let arr7 = ["hi", "im", "wooriko"];

const join = arr7.join("-");

console.log(join);
