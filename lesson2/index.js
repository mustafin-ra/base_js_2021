console.log("Hello World!");

// всего в JS 8 типов данных
// number
// string
// boolean
// null
// undefined
// object
// symbol - используется для создания уникальных идентификаторов объектов
// bigint  - для работы с целыми числами произвольной длинны

let ageAdmin = 37; //type of number
const pi = 3.14;
console.log(ageAdmin);
console.log(typeof ageAdmin);
console.log(typeof pi);
let erNaN = "Text" / 0; //type of number - NaN
console.log(erNaN);
console.log(typeof erNaN);
let inf = 1 / 0; //type of number - Infinity
console.log(inf);
console.log(typeof inf);

let fioAdmin = "Renat"; //type of string
let helloUser = `Hello ${fioAdmin}`; //интерполяция выражений, т.е. можно в строке подставить значение
console.log(fioAdmin);
console.log(helloUser);
console.log(typeof fioAdmin);

let isAdmin = true; //type of boolean
console.log(isAdmin);
console.log(typeof isAdmin);
isAdmin = 2; //JS использует динамическую типизацию
console.log(isAdmin);
console.log(typeof isAdmin);

let variableNull = null; //переменная типа null т.е. ничего пусто значение не известно
console.log(variableNull);
console.log(typeof variableNull); //тип будет возвращаться object это ошибка языка, но ее не исправляют т.к. 'повредит' написанный код

let ageManager; //не определили тип, пока не задали значение, будет undefined
console.log(typeof ageManager);

let user = {
  //type of object
  name: "Alex",
  age: 21,
};
console.log(user.name);
user.name = "Max";
console.log(user.name);
console.log(typeof user.name);
console.log(typeof user);
user = 56; //попробовали переопределить тип object получили undefined
console.log(user.name);

const userRoot = {
  //type of object
  name: "Alex",
  age: 21,
};
userRoot = 456; //пробуем переопределить const object получаем ошибку

console.log(typeof alert); //раньше возвращал тип function, которго в JS нет
