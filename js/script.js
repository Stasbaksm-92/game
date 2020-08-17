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
/* if (2 * 4 == 4) {
    console.log("верно")
} else {
    console.log("не верно")
} */
/* let num = 50;
if (num < 49) {
    console.log("bed")
} else if (num > 100) {
    console.log("much")
} else {
    console.log("good")
}; */

/* switch (num) {
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
//First task
//задание 1
/* let money = prompt("Ваш бюджет на месяц?", ''),
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
appData.expenses[a3] = a4; */

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание !

/* alert(appData.budget / 30); */

//цикл
//let num = 50;
/* while (num < 55) {
    console.log(num);
    num++;
} */
/* do {
    console.log(num);
    num++;
} */
/* while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
    console.log(i)
} */

//задание 2
/* let x = 5;
alert(x++);
console.log(x) */

/* let y = 1;
let x = y = 2;
alert(x) */


/* alert("1" [0]) */

//alert(null || 2 && 3 || 4);

//alert(+"Infinity");


//задание 3
/* let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }

};

appData.moneyPerDay = appData.budget / 30;


alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
} */


// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

//задание 4
/* let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }

    };
}
chooseExpenses();


function detectDayBudget() { // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() { // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() { // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
 */

//задание 5

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }

        };

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Ошибочка...!");
        }

    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }

    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительний доход( перечислите через запятую)', '');
        appData.income + items.split(', ');
        appData.income.push(prompt("что может что то еще"));
        appData.income.sort();
    }
};