// 1.콜백함수(나중에 실행되는)
// -> 자신이 아닌 다른 함수에 인수로써 전달된 함수

function main(value) {
  console.log(1);
  console.log(2);
  value(); //원하는 타이밍에 실행할 수 있다
  console.log(3);
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 화살표 함수로 아래와 같이 사용해도 됨
// main(() => {
//   console.log('i am sub')
// })

// 2. 콜백함수의 활용(함수 선언을 여러개 하지 않고 중복코드 개선)

console.clear();

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 화살표 함수 사용시
repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

// 함수선언문 사용시
// repeat(5, function (idx) {
//   console.log(idx);
// })
