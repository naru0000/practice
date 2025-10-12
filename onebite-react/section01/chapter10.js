// for (초기식; 조건식; 증감식) {
//   console.log("반복!");
// }

for (let idx = 1; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 이 조건식이 참이면 다음 반복 회차로 넘어감
  }

  console.log(idx);

  if (idx >= 5) {
    break; // 조건식을 수정할 수 없을때 이렇게 강제로 종료할 수 있음
  }
}
