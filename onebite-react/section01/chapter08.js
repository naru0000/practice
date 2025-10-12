// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1은 undefined, var2는 10으로 초기화된 상황
console.log(var4); // undefined가 아닌 var2의 값인 10을 출력

let var5 = var3 ?? var2; // 둘다 undefined나 null이 아닐 경우 맨 앞의 변수값을 출력한다.
console.log(var5);

let userName = "고우리";
let userNickName = "붕어싸만코";

let displayName = userName ?? userNickName; //userName의 값이 있을 경우 userName을 변수에 할당, userName이 null이거나 undefined일 경우 userNickName 할당

console.log(displayName);

// 2. typeof 연산자

// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var6 = "hello";

let t1 = typeof var6;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참,거짓의 값을 다르게 반환

let var7 = 10;

let res = var7 % 2 === 0 ? "짝" : "홀";

// 요구사항: 변수 res에 var7의 값이 짝수 -> '짝', 홀수 -> '홀'
