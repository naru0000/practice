// 6가지 요소 조작 메서드

// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6); // 요소 추가후 변환된 배열의 길이를 반환함

console.log(arr1);
console.log(newLength);

// 2. pop
// -> 배열의 맨 뒤에 있는 요소를 제거하고 제거된 요소를 반환함

let arr2 = [1, 2, 3];
const popItem = arr2.pop(); // 3

console.log(arr2);
console.log(popItem);

// 3. shift
// -> 배열의 맨 앞에 있는 요소를 제거, 반환

let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();

console.log(arr3);
console.log(shiftItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가

let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4);
console.log(newLength2);

// shift와 unshift는 push와 pop보다 느리다. 되도록 push와 pop을 사용하는 걸 권장

// 5. slice
// -> 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let slice = arr5.slice(2, 5);

console.log(slice);
console.log(arr5); // 변수에 담지 않으면 원본 값을 잘라도 변하지 않음

// 6. concat
// -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);

console.log(concatedArr);
