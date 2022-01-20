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

// console.log("START");

// const value = -5;
// const value;//будут ошибка
// let value;
// const value = undefined;

// if (value === 0) {
//   console.log(value, "=value");
// } else if (value > 1) {
//   console.log(value, ">1");
// } else if (value < -1) {
//   console.log(value, "<-1");
// } else {
//   console.log(value);
// }

// console.log("FINISH");

//Условный оператор "?" тернарный оператор это аналог if else if
// let result = условие ? значение1 : значение2
// если условие true выполняется значение1 если false значение2
//let result = условие1 ? значение1 : условие2 ? : значение2 : значение3
//большие конструкции сложно читаемы и вложенное использование тернарных операторов внутри других
// тернарных операторов считается плохой практикой

// const age = 10;

// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";

// console.log(result);

//switch - аналог нескольких блоков if ... else if ... используется когда много условий / сравнений
// switch(value){
//   case "value1": //value === value1
//     //исполняемая инструкция
//   break;//обязательное слово в конструкции switch для остановки выполнения
//   case "value2": //vakue === value2
//     //исполняемая инструкция
//   break;
//   default:
//     //исполняемая инструкция
//   break;
// }

switch ("Renat") {
  case "Alex":
    console.log("Alex");
    break;
  case "Renat":
    console.log("Renat");
    break;
  case "Andy":
    console.log("Andy");
    break;
  default:
    console.log("Имя нет в списке");
}

console.log("FINISH");

//если бы мы не поставили break то мы дошли бы до и выпонили case "Renat" и все последующие т.к.
// особенностью конструкции является то что все последующие инструкции выполняются не зависимо от того
// выпонилось условие case или нет
// break можно заменить на return только return приводит к завершению всего скрипта
// использование break позволяет проигнорировать все остальные case , скрипт будет выполнен до конца
