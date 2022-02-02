//задача на температуру и рекомендации в зависимости от ее значения
// const currentTemperature = 10;

// if (currentTemperature < -30) {
//   console.log("Оставайся дома");
// } else if (-30 < currentTemperature && currentTemperature < -10) {
//   console.log("Сегодня холодно");
// } else if (-10 < currentTemperature && currentTemperature < 5) {
//   console.log("Не холодно");
// } else if (5 < currentTemperature && currentTemperature < 15) {
//   console.log("Тепло");
// } else if (15 < currentTemperature && currentTemperature < 25) {
//   console.log("Очень тепло");
// } else if (25 < currentTemperature && currentTemperature < 35) {
//   console.log("Жарко");
// } else if (currentTemperature >= 35) {
//   console.log("Пекло!");
// }

// let startPeriud = 1800;
// let endPeriud = 2020;
// let countIteration = 0;

// while (startPeriud <= 1961) {
//   startPeriud += 1;
//   countIteration += 1;
// }
// console.log(countIteration);

// let countIteration = 0;
// for (let startPeriud = 1800; startPeriud <= 1961; startPeriud++) {
//   countIteration++;
// }
// console.log(countIteration);

// let startPeriud = 1800;
// let endPeriud = 2020;
// let countIteration = 0;
// while (startPeriud % 4) {
//   startPeriud++;
// }
// while (startPeriud <= endPeriud) {
//   startPeriud += 4;
//   countIteration += 1;
// }
// console.log(countIteration);

// let countIteration = 0;
// for (let startPeriud = 1800; startPeriud <= 2020; startPeriud += 4) {
//   countIteration += 1;
// }
// console.log(countIteration);

// let a = 1;

// if (a === "1") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = true;

// if (test) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// test ? console.log("Верно") : console.log("Неверно");

// let test = true;

// if (!test) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// !test ? console.log("Верно") : console.log("Неверно");

// let a = 2;

// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let a = 2;

// if (a === 0 || a === 2) {
//   a += 7;
// } else {
//   a /= 10;
// }
// console.log(a);

// let a = 3;
// let b = 5;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// let a = 3;
// let b = 5;

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let num = 1;

// let result;

// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
// }

// console.log(result);

// let day = 19;

// day <= 10
//   ? console.log("В первую")
//   : day > 20
//   ? console.log("В третью")
//   : console.log("Во вторую");

// if (day <= 10) {
//   console.log("В первую");
// } else if (day > 20) {
//   console.log("В третью");
// } else {
//   console.log("Во вторую");
// }

// let month = 5;

// if ((month >= 1 && month <= 2) || month === 12) {
//   console.log("Winter");
// } else if (month >= 3 && month <= 5) {
//   console.log("Spring");
// } else if (month >= 6 && month <= 8) {
//   console.log("Summer");
// } else if (month >= 9 && month <= 11) {
//   console.log("Autumn");
// } else {
//   console.log("The data is not entered correctly");
// }

let strRandom = "asdfsdf";
if (strRandom <= "a") {
  console.log("yes");
} else {
  console.log("no");
}
