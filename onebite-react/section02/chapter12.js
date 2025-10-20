// 비동기 작업을 하는 함수의 결과값을 함수 외부에서 이용하고 싶을 때
// 콜백함수를 사용해서 비동기 안에서 콜백함수를 호출한다

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b; // 함수의 결과값
    callback(sum); // 콜백함수로 호출
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

//음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 3000);
}

function freezFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 3000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 늘어날수록 가독성이 안좋아짐(콜백지옥)

function animalSound(sound, callback) {
  setTimeout(() => {
    const animal = `어떤 동물의 울음소리게? ${sound}!`;
    callback(animal);
  }, 3000);
}

animalSound("멍멍", (value) => {
  console.log(value);
});
