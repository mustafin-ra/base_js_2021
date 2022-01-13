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
String преобразуется по правилу

let testValue = "12345";
let testValue2 = "12345zxc";
let testValue3;
console.log(typeof testValue);
testValue = Number(testValue);
console.log(typeof testValue);
testValue2 = Number(testValue2);
console.log(typeof testValue2); //тип будет Number
console.log(testValue2); //значение будет NaN т.к. не смог преобразовать
