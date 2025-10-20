// 1. Promise
// -> 비동기 작업을 감싸는 객체

// pending(대기,아직 작업이 완료되지 않은 상태)
// fulfilled(성공, 비동기 작업이 성공적으로 마무리 된 상태)
// rejected(실패, 비동기 작업이 실패한 상태)
// resolve(해결되었다)
// reject(거부되었다)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor라고 부른다.

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      // console.log("안녕");
      // reject("왜 실패했는지 이유...");
    }, 2000);
  });

  return promise;
}

const p = add10(0);

p.then((result) => {
  console.log(result);
});

// then 메서드
// 그 후에(비동기 작업의 결과값을 자유롭게 불러올 수 있음)
// promise 객체를 그대로 반환함

// promise // 프로미스 체이닝
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise.catch((error) => {
//   console.log(error);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);
