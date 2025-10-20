// 각각의 기능으로 나눈 자바스크립트 파일을 모듈이라고 함
// 모듈을 생성하고 불러오고 사용하는 걸 모듈 시스템이라고 함
// common js module system
// 구조분해할당 이용(변수에 안넣어줘도 됨)
// const { add, sub } = require("./math");

import mul from "./math.js"; // export default로 불러올때는 중괄호 없이,함수의 이름을 변경해서 불러올 수 있음
import { add, sub } from "./math.js"; // es module system(모듈의 확장자까지 명시해주어야함)

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
