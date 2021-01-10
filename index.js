// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

function isAdult(age) {
  if (isNaN(age)) {
    return 'input is not accepted, try again';
  }
  return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(12));


// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
//     checkMultiplicity(25, 5) // true
//     checkMultiplicity(15, 3) // true
//     checkMultiplicity(15, 5) // true
//     checkMultiplicity(15, 4) // false

function checkMultiplicity(a, b) {
  return !isNaN(a - b) && a % b === 0
    ? true + ' multiple of ' + (b)
    : false + ' not a multiple of ' + (b);
}
console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(21, 4)); // false
console.log(checkMultiplicity(32, 8)); // true     


// 3. Проверка возможности треугольника.
//  Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

function checkTriangleReal(a, b, c) {
  return !isNaN(a, b, c) &&
    a < b + c && b < a + c && c < a + b
    ? true + ' Triangle is Real'
    : false + ' Is not real triangle ';
}
console.log(checkTriangleReal(2, 5, 4)); // true
console.log(checkTriangleReal(9, 3, 6)); // false
console.log(checkTriangleReal(12, 10, 5)); // true

// 4. Написать функции расчета площадей (поверхности)
//  следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника

function areaRhombus(Diag1, Diag2) {
  return !isNaN(Diag1, Diag2)
    ? Diag1 * Diag2 * 1 / 2 + (' area of a rhombus')
    : false;
}
console.log(areaRhombus(9, 3)); // true
console.log(areaRhombus('sdf', 2)); // false
console.log(areaRhombus(8, 5)); // true

function areaCylinder(CylR, CylH) {
  return !isNaN(CylR, CylH)
    ? 2 * Math.PI * CylR * (CylR + CylH) + (' area of a cylinder')
    : false;
}
console.log(areaCylinder(9, 3)); // true
console.log(areaCylinder('sdf', 2)); // false
console.log(areaCylinder(8, 5)); // true