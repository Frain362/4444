//////////////////////////////////////////////1
var number = prompt("Введите число:");
if (number > 0) {
    alert("Число положительное");
} else if (number < 0) {
    alert("Число отрицательное");
} else {
    alert("Это ноль");
}
/////////////////////////////////////////////2
var age = prompt("Введите ваш возраст:");
age = Number(age);
if (age >= 0 && age <= 120) {
    alert("Возраст введен корректно");
} else {
    alert("Возраст введен некорректно");
}
////////////////////////////////////////////////3
var num = prompt("Введите число:");
num = Number(num);
var absoluteValue = num < 0 ? -num : num; // Можно также использовать Math.abs(num)
alert("Модуль числа: " + absoluteValue);
///////////////////////////////////////////4
var hours = prompt("Введите часы:");
var minutes = prompt("Введите минуты:");
var seconds = prompt("Введите секунды:");
if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) {
    alert("Время введено корректно");
} else {
    alert("Время введено некорректно");
}
//////////////////////////////////////////////////////////////////////////////////5
var x = prompt("Введите координату X:");
var y = prompt("Введите координату Y:");
if (x > 0 && y > 0) {
    alert("Первая четверть");
} else if (x < 0 && y > 0) {
    alert("Вторая четверть");
} else if (x < 0 && y < 0) {
    alert("Третья четверть");
} else if (x > 0 && y < 0) {
    alert("Четвертая четверть");
} else if (x === 0 && y === 0) {
    alert("Начало координат");
} else if (x === 0) {
    alert("Точка на оси Y");
} else if (y === 0) {
    alert("Точка на оси X");
}
//////////////////////////////////////////6
var monthNumber = prompt("Введите номер месяца (1-12):");
switch (Number(monthNumber)) {
    case 1:
        alert("Январь");
        break;
    case 2:
        alert("Февраль");
        break;
    case 3:
        alert("Март");
        break;
    case 4:
        alert("Апрель");
        break;
    case 5:
        alert("Май");
        break;
    case 6:
        alert("Июнь");
        break;
    case 7:
        alert("Июль");
        break;
    case 8:
        alert("Август");
        break;
    case 9:
        alert("Сентябрь");
        break;
    case 10:
        alert("Октябрь");
        break;
    case 11:
        alert("Ноябрь");
        break;
    case 12:
        alert("Декабрь");
        break;
    default:
        alert("Неверный номер месяца");
}
////////////////////////7
var num1 = prompt("Введите первое число:");
var num2 = prompt("Введите второе число:");
var operator = prompt("Введите оператор (+, -, *, /):");

num1 = Number(num1);
num2 = Number(num2);
var result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        alert("Неверный оператор");
}
///////////////////8
if (result !== undefined) {
    alert("Результат: " + result);
}
////////////////////////////////////////////9
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));

const maxNum = (num1 > num2) ? num1 : num2;
alert(`Большее число: ${maxNum}`);
////////////////////////////////////////10
const num = parseInt(prompt("Введите число:"));

const message = (num % 5 === 0) ? "Число кратно 5." : "Число не кратно 5.";
alert(message);
//////////////////////////////////////////////////////////////////11
const planet = prompt("Введите название планеты:");

const greeting = (planet === "Земля" || planet === "земля") ? "Привет, землянин!" : "Привет, инопланетянин!";
alert(greeting);
