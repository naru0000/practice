// 단락평가
// -> 특정 조건에 맞춰서 특정 함수를 호출하지 않도록 방지하는 기능
// -> 전류가 더 이상 흐르지 않는 것처럼 필요한 만큼만 평가하고 멈춘다

function returnFalse() {
  console.log("false 함수");
  return undefined; // falsy
}

function returnTrue() {
  console.log("true 함수");
  return 10; //truthy
}

// console.log(returnFalse() && returnTrue()); // f and ? 는 무조건 false니 호출 자체를 생략함
// console.log(returnTrue() && returnFalse()); // true and ? 일때는 단락평가 작동 X 다 호출됨
console.log(returnTrue() || returnFalse()); // true and ? 일때 무조건 true니 호출 자체를 생략함

// 단락평가 활용 사례

// function printName(person) {
//   if (!person) {
//     console.log("person의 값이 없음");
//   }
//   console.log(person.name);
// }

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "고우리" });

// ||의 정확한 규칙:

// 첫 번째가 truthy → 첫 번째 반환 ✅
// 첫 번째가 falsy → 두 번째 반환

// &&의 정확한 규칙:

// 첫 번째가 falsy → 첫 번째 반환
// 첫 번째가 truthy → 두 번째 반환 ✅
