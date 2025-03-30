////////////////////////
var count = parseInt(prompt("Введите количество символов #:", "10"));
var i = 0;
var output = "";

while (i < count) {
    output += "#";
    i++;
}
////////////////////
alert(output);

var number = parseInt(prompt("Введите число:", "5"));

while (number >= 0) {
    alert(number);
    number--;
}
////////////////////////
var base = parseFloat(prompt("Введите число:", "2"));
var exponent = parseInt(prompt("Введите степень:", "3"));
var result = 1;
var i = 0;

while (i < exponent) {
    result *= base;
    i++;
}

alert("Результат: " + result);
////////////////////////////////
var num1 = parseInt(prompt("Введите первое число:", "12"));
var num2 = parseInt(prompt("Введите второе число:", "18"));
var i = 1;
var commonDivisors = [];

while (i <= Math.min(num1, num2)) {
    if (num1 % i === 0 && num2 % i === 0) {
        commonDivisors.push(i);
    }
    i++;
}
alert("Общие делители: " + commonDivisors.join(", "));
////////////////////////
var answer;

do {
    answer = parseInt(prompt("Решите пример: 2 + 2 * 2 = ?", ""));
} while (answer !== 6);

alert("Правильно!");
////////////////////////////////
var number = 1000;
var divisions = 0;

do {
    number /= 2;
    divisions++;
} while (number >= 50);

alert("Число: " + number + "\nКоличество делений: " + divisions);
////////////////////////
var divisor = parseInt(prompt("Введите число, кратным которому нужно найти числа:", "5"));
var multiples = [];

for (var i = 1; i <= 100; i++) {
    if (i % divisor === 0) {
        multiples.push(i);
    }
}

alert("Числа, кратные " + divisor + ": " + multiples.join(", "));
////////////////////////////////
var min = parseInt(prompt("Введите минимальное значение диапазона:", "1"));
var max = parseInt(prompt("Введите максимальное значение диапазона:", "20"));
var everyFourth = [];

for (var i = min; i <= max; i++) {
    if ((i - min) % 4 === 0) { // Убедимся, что отсчет начинается от минимального значения
        everyFourth.push(i);
    }
}

alert("Каждый 4-й элемент: " + everyFourth.join(", "));
////////////////////////
var number = parseInt(prompt("Введите число для проверки на простоту:", "7"));
var isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) { // Достаточно проверить до квадратного корня
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(number + " - простое число");
} else {
    alert(number + " - не простое число");
}
////////////////////////////////