// async

// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return {
    name: "고우리",
    id: "naru0000",
  };
}

console.log(getData());

async function printData() {
  const data = await getData();
  console.log(data);
}

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기함수가 다 처리되기를 기다리는 역할을 하는 키워드

console.clear();

const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("안녕하세요!");
  }, 2000);
});

test.then((message) => {
  console.log(message);
});
