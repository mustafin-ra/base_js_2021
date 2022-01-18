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

// console.log(19 % 4); //остаток от деления т.е. ближайшее число которое делится на 4 будет 16 , соответственно
// 19-16=3 т.е. 3 и будет остаток от деления
//остаток от деления наиболее часто используется для проверки четности

// Унарный плюс +  самый короткий способ преобразования к числу , это тоже что использовать преобразование Number
// typeof +5 тип number значение 5
// typeof +"Hello World" тип number значение NaN
// typeof +false тип number значение 0
// const value = 5;
// console.log(typeof value, typeof +value);
// const value = "5";
// console.log(typeof value, typeof +value, typeof Number(value));

//Бинарный плюс, плюс применяемый к двум значениям. Плюс складывает числа с числами, если хотя бы один
// операнд строка, то бинарный плюс объединяет их в одну (конкатенация/склеивание строк)
//во всех остальных математических операциях происходит преобразование типов в number и дальнейшая математическая операция
// 2 + 5 тип number значение 7
// "Hello" + " " + "World"  тип string  значение Hello World
// 1 + "000"  тип string значение 1000
// 1 + true   тип number значение 2  т.к. по умолчанию у нас при выполнении математической операции операнды
// пытаются привести к типу number (за исключением строки) и затем выполняется сама математическая операция

// let sum = 5 + 6;
// console.log(sum);

// sum = 1 + true;
// console.log(sum);

// sum = 5 + null; //null преобразуется в ноль
// console.log(sum);

// const stringValue = "Renat";
// const stringValue = "12";
// const numberValue = 37;

// console.log(stringValue + numberValue);
// console.log(+stringValue + numberValue);
// console.log(typeof (stringValue + numberValue));
// console.log(typeof (numberValue + +stringValue));

// const firstName = "Renat";
// const lastName = "Mustafin";

// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);//более современный способ использование шаблонной строки ${} позволяет выполнить любой валидный код JS

//Операторы сравнения
//Операторы сравнения возвращают логическое значение Bolean т.е. true или false т.е. при использовании оператора сравнения всегда получим Boolean тип
// при использовании операторов сравнения для различных типов происходин не явное преобразование типов к типу Number . Когда переменные одного типа к примеру оба сравниваемых
// значения являются строкой то мы сравниваем уже как строки
// и затем выполняется оператор сравнения
// !!! при нестрогом равенстве null и undefined равны друг другу и не равны никаким другим значениям. Это специальное правило языка
// Больше/меньше: a > b , a < b
// Больше/меньше или равно: a >=b , a <= b
// Равно: a == b для сравнения используется двойной знак равенства тогда как = это присвоение  чего(переменной справа) чему(переменной слева)
// Не равно: a != b

// console.log(5 == 5); //true
// console.log(5 != 7);
// console.log(false == 0); //true произошло преобразование false в число
// console.log(typeof 5 == "number");//true т.к. typeof 5 дает строку "number"

//Сравнение строк происходит по следующим правилам, если первый символ первой строки больше(меньше)
// чем первый символ второй строки, то первая строка больше(меньше) второй. Если первые символы равно
// то идет дальнейшее сравнение. Сравнение продолжается пока не закончится одна из строк. Если строки
// заканчиваются одновременно, то они равны, иначе более длинная строка больше
// console.log("a" < "b"); //true т.е. чем дальше по алфавиту тем больше
// console.log("a" > "A"); //  01234ABCabc каждый символ имеет чард код т.к. конкретный код в таблице юникода

// const firstString = "яблоко";
// const secondString = "Яблоко красное";
// console.log(firstString == secondString);
// console.log(firstString > secondString); //true
// console.log(firstString != secondString); //true

//Строгое равенство
//при строгом равенстве сравниваются значения и тыпы сравниваемых переменных
//Строгое равенство предпочтительнее использовать
// const a = 0;
// const b = "0";
// console.log(a == b); //true//не строгое сравнение, сравниваются только значения не явно преобразованные к типу number
// console.log(0 == "0"); //true
// console.log(a === b); //false//строгое сравнение, сравниваются и значения и тип
// console.log(0 === "0"); //false

//Сравнение с null и undefined
//при строгом равенстве === эти значения различны т.к. различны типы
// при нестрогом равенстве == эти значения равны друг другу и не равны никаким другим значениям (т.е. к примеру null==0 false). Это специальное правило языка
// при использовании математических операторов и других операторов сравнения <> <=>= происходит преобразование к типу number и дальнейшее сравнение
//чтобы избежать проблем не нужно использовать <> <=>=  с переменными, которые могут принимать значения null/undefined и если переменная может принимать
// эти значения, то желательно добавить для них отдельные проверки на null/undefined

console.log("2" > "12"); //true
console.log(2 > "12"); //false
let a = null;
let b;
console.log(a == b); //true

console.log(true + false); //1
console.log("" + 1 + 0); //"10" т.к. бинарный плюс со строкой приводит к конкатенации
console.log("" - 1 + 0); //-1  т.к. с другими мат. операциями происходит преобразование типа в number и дальнейшая мат. операция
console.log(true + "" + false); //"truefalse"
console.log(true + false + ""); //"1" потому что мы выполняем операции слева на право т.е. первый плюч между true + false даст математическую единицу
//а второй плюч будет между мат. единицей и строкой
// NaN not a namber т.е. не валидное значение
console.log("\t\n" - 2); //-2 т.к. при преобразование строки эти спец символы дают пробел и перевод строки т.е. получается нулевая строка

console.log(null == null); //true
console.log(null == undefined); //true
console.log(null == 0); //false
console.log(null === undefined); //false
console.log(null === null); //true
