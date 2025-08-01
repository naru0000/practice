// 함수 선언식

function introduce(name, age) {
  return `제 이름은 ${name}이고, 나이는  ${age}살입니다.`;
}

// 함수 표현식
const introduce2 = function (name, age) {
  return `제 이름은 ${name}이고, 나이는 ${age}살입니다.`;
};

// 화살표 함수
const introduce3 = (name, age) => {
  `제 이름은 ${name}이고, ${age}살입니다.`;
};
