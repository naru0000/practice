// promise 생성
/* 
const 치킨주문 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("치킨이 완성됐닭");
    } else {
      reject("치킨이 안됐닭");
    }
  }, 3000);
});

치킨주문.then((치킨) => console.log("아싸!", 치킨)).catch((에러) => console.log("이런!", 에러)); */

// fetch

// function 치킨주문() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // 괄호 빼먹지 마셈
//     .then((data) => {
//       console.log("데이터가 들어왔습니다.", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("데이터가 들어오지 못했습니다.", error);
//     });
// }

// 치킨주문();

// async/await

async function 치킨가져오기() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("데이터가 들어왔습니다.", data);
  } catch (error) {
    console.error("데이터가 들어오지 못했습니다", error);
  }
}
