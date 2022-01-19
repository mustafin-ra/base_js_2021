// if else if else
// хорошим тоном создавать не более 5 условий еще если

// if (true) {
//     //выполняемая инструкция
//   console.log("true");
// }

// if (false) {
//   console.log("false");
// }

// console.log('START');

// const value = -5;

// if (value > 0) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// console.log('FINISH');

console.log("START");

// const value = -5;
// const value;//будут ошибка
// let value;
const value = undefined;

if (value === 0) {
  console.log(value, "=value");
} else if (value > 1) {
  console.log(value, ">1");
} else if (value < -1) {
  console.log(value, "<-1");
} else {
  console.log(value);
}

console.log("FINISH");
