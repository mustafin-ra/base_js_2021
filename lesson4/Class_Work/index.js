// if else if else
// хорошим тоном создавать не более 5 условий еще/иначе если

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
//let result = условие1 ? значение1 : условие2 ? значение2 : значение3
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

// switch ("Renat") {
//   case "Alex":
//     console.log("Alex");
//     break;
//   case "Renat":
//     console.log("Renat");
//     break;
//   case "Andy":
//     console.log("Andy");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }

// console.log("FINISH");

//если бы мы не поставили break то мы дошли бы до и выпонили case "Renat" и все последующие т.к.
// особенностью конструкции является то что все последующие инструкции выполняются не зависимо от того
// выпонилось условие case или нет
// break можно заменить на return только return приводит к завершению всего скрипта
// использование break позволяет проигнорировать все остальные case , скрипт будет выполнен до конца

//задача вывести наибольший отрезок решение не оптимальное
// const segmentA = 266;
// const segmentB = 3799;
// const segmentC = 467;

// segmentA > segmentB && segmentA > segmentC
//   ? console.log(segmentA)
//   : segmentB > segmentA && segmentB > segmentC
//   ? console.log(segmentB)
//   : console.log(segmentC);

//оптимальное решение
// const a = 11;
// const b = 3;
// const c = 7;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);//тернарник
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

// const userRole = "manager";

// switch (userRole) {
//   case "admin":
//     console.log("admin_info");
//     break;
//   case "user":
//     console.log("user_info");
//     break;
//   case "manager":
//     console.log("manager_info");
//     break;
//   default:
//     console.log("no_info");
// }

//Логические операторы && ||  !
//вычисляются операнды слева направо
//Логическое или || при вычислении преобразую операнды к логическому типу и возвращают первое true
//если все значения false то возращает последнее значение
//!возвращает первое значение true последнее значение false

// if (1 || 0) {
//   //сперва 1 и 0 преобразуется в bolean получаем операция логическое или вернет первое true значение т.е. 1 а if преобразует 1 в bolean т.е. true после чего выполняется инструкция
//   console.log("Сработало");
// }

// const a = 0;

// const b = 1;

// let result1 = a || b; //result1=1 возвращается первое true значение

// let result2 = a || false || "value" || b; //result2="value"

// let result3 = false || "" || 0; //result3=0 нет не одного true возвращается последнее значение

//Логическое И &&
//для вычисления приводит значения к логическому типу. Возвращает true если оба значения истинны
// При выполнении находится первое ложное значение, которое возвращается в исходном виде
// При вычислении возвращает первое false
// Если все значения true , то возвращает значение последнего операнда
//!возвращает первое false последнее true

// if (1 && 0) {
//   console.log("Не сработало"); //т.к. выражение false
// }

// const a = 0;
// const b = 1;
// let result1 = a && b; //result=0
// let result2 = b && true && "value"; //result2="value"

// const a = 5;
// const b = 2;
// const c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

//!!! приоритет у && выше чем || т.е. a&&b||c&&d равностльно (a&&b)||(c&&d)
// || возвращает первое true
// && возвращает первое false

//логический оператор НЕ !
// приводит аргумент к логическому типу и возвращает противоположное значение
// приоритет ! является наивысшим среди логических операторов
//!! двойное отрицание это быстрый способ привести к bolean типу

// if (!1) {
//   console.log("не сработало");
// } else if (!0) {
//   console.log("сработало");
// }

// const name = "";

// if (!name) {
//   console.log("Имя не задано");
// } else {
//   console.log(name);
// }

// if (name) {
//   console.log(name);
// } else {
//   console.log("Имя не задано");
// }

// console.log(!"Renat"); //false
// console.log(!!"Renat"); //true  равносильно console.log(Bolean("Renat"));

// console.log(null || 0 || "" || undefined);
// console.log("яблоко" && true && null && 1);
// console.log(0 || (true && "false") || null);
// console.log((0 && true) || ("false" && null));
// console.log(!0 && !!1);
// console.log(!(null || (!"апельсин" && true)));
