// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 잘 이용하지는 않음

//2. truthy한 값
// -> falsy한 값들 제외한 나머지 모든 값

//3. 활용사례

function printName() {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }

  console.log(person.name);
}

// truthy와 falsy를 이용하면 undefined,null을 일일이 지정하지 않아도 된다.

let person = { name: "고우리" };

printName();
