//STRING преобразование к строе
// const firstValue = String(5);
// console.log(typeof firstValue);
// const obj = {
//   foo: "bar",
//   year: 54,
// };
// console.log(typeof String(obj)); //тип будет string
// console.log(String(obj)); //значение будет [object Object] т.е. js пропарсил но не смог понять как обработать и вернул такую комбинацию
// console.log(typeof String(obj.year));//тип будет string

//NUMBER
// Undefined становится Number со значением NaN
// Null становится Number со значением 0
// true/false становится Number со значением 1/0
// String преобразуется по правилу пробельные символы по краям обрезаются, если остается пустая строка то получаем 0 из не пустой строки
// считывается число, если не получается преобразовать то получаем NaN

// let testValue = "12345";
// let testValue2 = "12345zxc";
// let testValue3;
// console.log(typeof testValue);
// testValue = Number(testValue);
// console.log(typeof testValue);
// testValue2 = Number(testValue2);
// console.log(typeof testValue2); //тип будет Number
// console.log(testValue2); //значение будет NaN т.к. не смог преобразовать

// const isUser = true;
// const isAdmin = false;

// console.log(Number(isUser), Number(isAdmin));

// const voidString = "";
// console.log(Number(voidString));

//Boolean
// преобразование дает false: 0, undefined, NaN, ""-это строка без единого символа
// true: все остальные значения (к приеру "0" " " тоже дадут true)
// const value = "";
// console.log(typeof Boolean(value), Boolean(value));
// //Важный момент преобразование и пустого и заполненного массива или объекта тоже даст true
// const obj = [];
// console.log(Boolean(obj)); //true
// console.log(Boolean(obj.length)); //false т.к. длинна массива нулевая

// Математические операции
// Сложение +
// Вычитание -
// Умножение *
// Деление /
// Взятие остатка от деления %
// Возведение в степень **

console.log(19 % 4); //остаток от деления т.е. ближайшее число которое делится на 4 будет 16 , соответственно
// 19-16=3 т.е. 3 и будет остаток от деления
//остаток от деления наиболее часто используется для проверки четности

// Унарный плюс +  самый короткий способ преобразования к числу , это тоже что использовать преобразование Number
// typeof +5 тип number значение 5
// typeof +"Hello World" тип number значение NaN
// typeof +false тип number значение 0
// const value = 5;
// console.log(typeof value, typeof +value);
const value = "5";
console.log(typeof value, typeof +value, typeof Number(value));
