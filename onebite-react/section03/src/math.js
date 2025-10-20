//math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add,
//   sub: sub,
// };

export { add, sub }; // es module system

export default function multiply(a, b) {
  return a * b;
}
