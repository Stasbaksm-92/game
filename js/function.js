 //let num = 20; //глобальная переменная 

 //function showFirstMessage(text) {
 //  alert(text);
 //num = 10; //локальная переменная
 //}

 //showFirstMessage("hello World");
 //console.log(num);


 //калькулятор с помощью функции
 //function calk(a, b) {
 //  return (a + b);
 //}
 //функция по новому синтексису ES5 =>, но она используется не всегда
 /* let calc = (a, b) => a + b
 console.log(calk(3, 4));

 console.log(calk(8, 4));

 function retVar() {
     let num = 50;
     return num;
 }
 let anotherNum = retVar();
 console.log(anotherNum);


 // свойство lenghth
 let str = "test";
 console.log(str.length);
 // мы получили описание строки то что она сосотоит из 4 букв

 console.log(str.toUpperCase()); //строка все большие букв
 console.log(str.toLowerCase()); // все маленькие буквы


 let twelve = "12.2px";
 //console.log(Math.round(twelve)); //используется для округления


 console.log(parseInt(twelve)); //округляет значение
 console.log(parseFloat(twelve)); // возвращает десятичное число


 //Вызовов return может быть несколько, например:
 function checkAge(age) {
     if (age > 18) {
         return true;
     } else {
         return confirm('А родители разрешили?');
     }
 }

 let age = prompt('Сколько вам лет?', 18);

 if (checkAge(age)) {
     alert('Доступ получен');
 } else {
     alert('Доступ закрыт');
 } */


 //callback функции
 function first() {
     //что то делаем
     setTimeout(function () {
         console.log(1);
     }, 500);
 }

 function second() {
     console.log(2);
 }

 first();
 second();

 function lerntJS(land, callback) {
     console.log("я учу" + land);
     callback();
 }

 function done() {
     console.log("я прошел третий урок")
 }


 lerntJS("JavaScript", done);