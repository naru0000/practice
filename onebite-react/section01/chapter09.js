// 1. if 조건문(if로 시작해서 else로 끝나야함)
// -> 복잡한 여러개의 조건을 이용할 때 사용

let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 4) {
  console.log("num은 4 이상입니다.");
} else {
  console.log("num이 10 이상이 아닙니다.");
  console.log("조건이 거짓입니다.");
}

// 2. switch 조건문
// -> if문과 기능은 동일
// -> 다수의 조건을 처리할 때 if보다 직관적이다.
// -> 어떤 변수의 값을 기준으로 각각 다른 코드를 실행하고 싶을때 사용

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이"); // true이면 아래 case다 출력되버림
    break; // break를 넣어줘야 출력이 안됨
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다"); // else와 동일
  }
}
