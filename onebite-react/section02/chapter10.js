// 1. Date 객체를 생성하는 방법

let date1 = new Date();
console.log(date1);

let date2 = new Date("1997-01-07");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 '1970. 01. 01 00시 00분 00초'로부터 몇 ms가 지났는지 의미하는 숫자값

let ts1 = date1.getTime();
console.log(ts1); // UTC 시간으로부터 이 시간만큼 지나있다.

let date4 = new Date(ts1);

console.log(date4);

// 3. 시간요소들을 추출하는 방법

let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월이 0부터 시작해서 1을 더해줘야함
let date = date1.getDay();

let hour = date1.getHours();
let minute = date1.getMinutes();
let secondes = date1.getSeconds();

console.log(year, month, date, hour, minute, secondes);

// 4. 시간 수정하기

date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); // 현재 날짜만 출력
console.log(date1.toLocaleString()); // 문자열로 출력
