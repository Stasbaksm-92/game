'use strict';

/* let persone = {
    name: "john",
    age: 25,
    isMarried: false
};
 console.log(persone.name);

 */
//alert('hello World');

//let answer = confirm('are you here&');

//console.log(answer);
/* let answer = +prompt('Есть ли Вам 18', 'Да');

console.log(typeof (answer));

console.log("arr" + "-object");

console.log(4 + "-object"); */

//let incr = 10,
//  decr = 10;

//incr++;
//decr--;

//console.log(incr);
//console.log(decr);

//Условия
/* let num = 50;
if (num < 49) {
    console.log("bed")
} else if (num > 100) {
    console.log("much")
} else {
    console.log("good")
};

switch (num) {
    case num < 49:
        console.log("bed");
        break;
    case num > 100:
        console.log("much");
        break;
    case num > 80:
        console.log(" so much");
        break;
    case 50:
        console.log("good");
        break;
    default:
        console.log("error");
        break;

} */

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

alert(appData.budget / 30);