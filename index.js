'use strict'
//1) Вывод чисел от 25 до 0 (порядок уменьшения)

for (let i = 25; i >= 0; i--) {
  console.log(i);
};

let iz = 25;
do {
  console.log(iz); iz--;
} while (iz >= 0);

let n = 25;
while (n >= 0) {
  console.log(n); n--;
};

//2) Вывод чисел от 10 до 50, которые кратны 5

for (let multiple = 10; multiple <= 50; multiple += 5) {
  console.log(multiple);
};

let multiple = 10;
do {
  console.log(multiple); multiple += 5;

} while (multiple <= 50);


let mult = 10;
while (mult <= 50) {
  console.log(mult); mult += 5;
};

//3)  Найти сумму чисел в пределах от 1 до 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  if (i === 100) {
    console.log(sum);
  }
};


let i = 1;
let sumDo = 0;
do {
  sumDo += i;
  if (i === 100) {
    console.log(sumDo);
  }
  i++;

} while (i <= 100);

let it = 1;
let sumWh = 0;
while (it <= 100) {
  sumWh += it;
  if (it === 100) {
    console.log(sumWh);
  }
  it++;
};

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

let rightRes = 0;
while (true) {
  rightRes = + prompt('Чему равно выражение?\n 2 + 2 * 2 =  ')
  if (rightRes === 2 + 2 * 2) {
    alert('Ваш ответ верный!');
    break;
  };
  alert('Ваш ответ неверный!');

};



// // 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// // isAdult(20); // true
// // isAdult(4); // false

// function isAdult(age) {

//   if (isNaN(age)) {
//     return 'input is not accepted, try again';
//   }
//   return age >= 18;
// }
// console.log(isAdult(20));
// console.log(isAdult(12));


// // 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// //     checkMultiplicity(25, 5) // true
// //     checkMultiplicity(15, 3) // true
// //     checkMultiplicity(15, 5) // true
// //     checkMultiplicity(15, 4) // false

// function checkMultiplicity(a, b) {

//   return !isNaN(a - b) && a % b === 0
//     ? true + ' multiple of ' + (b)
//     : false + ' not a multiple of ' + (b);
// }
// console.log(checkMultiplicity(25, 5)); // true
// console.log(checkMultiplicity(15, 3)); // true
// console.log(checkMultiplicity(21, 4)); // false
// console.log(checkMultiplicity(32, 8)); // true     


// // 3. Проверка возможности треугольника.
// //  Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

// function checkTriangleReal(a, b, c) {

//   return !isNaN(a, b, c) &&
//     a < b + c && b < a + c && c < a + b
//     ? true 
//     : false + ' triangle is impossible';
// }
// console.log(checkTriangleReal(2, 5, 4)); // true
// console.log(checkTriangleReal(9, 3, 6)); // false
// console.log(checkTriangleReal(12, 10, 5)); // true

// // 4. Написать функции расчета площадей (поверхности)
// //  следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника

// function areaRhombus(Diag1, Diag2) {

//   return !isNaN(Diag1, Diag2)
//     ? Diag1 * Diag2 * 1 / 2 + (' area of a rhombus')
//     : false;
// }
// console.log(areaRhombus(9, 3)); // true
// console.log(areaRhombus('sdf', 2)); // false
// console.log(areaRhombus(8, 5)); // true


// function areaCylinder(CylR, CylH) {

//   return !isNaN(CylR, CylH)
//     ? 2 * Math.PI * CylR * (CylR + CylH) + (' area of a cylinder')
//     : false;
// }
// console.log(areaCylinder(3, 5)); // true
// console.log(areaCylinder('sdf', 2)); // false
// console.log(areaCylinder(5, 9)); // true


// function areaTriangle(sideA, sideB, sideC) {

//   const semiPerimeter = (sideA * sideB * sideC) / 2;

//   return checkTriangleReal(sideA, sideB, sideC) === true
//     ? Math.sqrt((semiPerimeter * (semiPerimeter - sideA) * 
//     (semiPerimeter - sideB) * (semiPerimeter - sideC)))
//     + (' area of a triangle')
//     : false + ' triangle is impossible';
// }
// console.log(areaTriangle(2, 5, 4)); // true
// console.log(areaTriangle(9, 3, 6)); // false
// console.log(areaTriangle(12, 10, 5)); // true


// function areaRectangle(side1, side2) {

//   return !isNaN(side1, side2)
//     ? side1* side2 + (' area of a rectangle')
//     : false;
// }
// console.log(areaRectangle(9, 3)); // true
// console.log(areaRectangle('sdf', 2)); // false
// console.log(areaRectangle(8, 5)); // true