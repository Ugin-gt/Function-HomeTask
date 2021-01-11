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