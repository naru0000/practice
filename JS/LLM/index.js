const users = [
    { id: 1, name: "Alice", age: 25, area: "Seoul" },
    { id: 2, name: "Bob", age: 30, area: "Busan" },
    { id: 3, name: "Charlie", age: 35, area: "Seoul" },
    { id: 4, name: "David", age: 22, area: "Daejeon" },
    { id: 5, name: "Eve", age: 28, area: "Seoul" },
];

// 서울(Seoul)에 사는 모든 사용자를 찾아 seoulUsers 라는 새로운 배열로 만들어 출력해주세요.
const seoulUsers = users.filter((x) => x.area === "Seoul");
console.log(seoulUsers);

// 모든 사용자의 나이만 모아 ages 라는 새로운 배열 [25, 30, 35, 22, 28]을 만들어 출력해주세요.
const ages = users.map((x) => x.age);
console.log(ages);

//(도전!) 30세 이상인 사용자를 찾은 뒤, 그들의 이름만 모아 adultNames 라는 새로운 배열 ['Bob', 'Charlie']을 만들어 출력해주세요. (힌트: 메서드를 연결해서 사용할 수 있습니다.
const adultNames = users.filter((x) => x.age >= 30).map((y) => y.name);
console.log(adultNames);

const ageSum = users.map((x) => x.age).reduce((total, current) => total + current, 0); // 초기값 0
console.log(ageSum);
