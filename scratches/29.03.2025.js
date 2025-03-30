// 1
function minOfTwo(a, b) {
  return a < b ? a : b;
}

console.log("Меньшее из 5 и 3: " + minOfTwo(5, 3));

// 2
function power(num, exponent) {
  return Math.pow(num, exponent);
}

console.log("2 в степени 3: " + power(2, 3));

// 3
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Деление на ноль!";
      }
      return num1 / num2;
    default:
      return "Неверный оператор!";
  }
}

console.log("5 + 3: " + calculate(5, 3, '+'));
console.log("10 / 2: " + calculate(10, 2, '/'));
console.log("7 * 4: " + calculate(7, 4, '*'));
console.log("9 - 1: " + calculate(9, 1, '-'));

// 4
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("7 простое? " + isPrime(7));
console.log("10 простое? " + isPrime(10));

// 5
function multiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

console.log("Таблица умножения для 5:");
multiplicationTable(5);

console.log("Таблицы умножения от 2 до 9:");
for (var i = 2; i <= 9; i++) {
    console.log(`Таблица умножения для ${i}:`);
    multiplicationTable(i);
}


// 6
function modulo(num1, num2) {
  if (num2 === 0) {
    return "Деление на ноль!";
  }

  var quotient = Math.floor(num1 / num2);  // Целая часть от деления
  return num1 - (num2 * quotient);         // Вычисляем остаток
}

console.log("Остаток от деления 17 на 5: " + modulo(17, 5));
console.log("Остаток от деления 10 на 3: " + modulo(10, 3));

// 7
function sumNumbers(...args) {
  if (args.length < 1 || args.length > 5) {
    return "Должно быть от 1 до 5 чисел!";
  }
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log("Сумма 1, 2, 3: " + sumNumbers(1, 2, 3));
console.log("Сумма 1, 2, 3, 4, 5: " + sumNumbers(1, 2, 3, 4, 5));
console.log("Сумма 1: " + sumNumbers(1));
console.log("Сумма: " + sumNumbers()); // Выведет ошибку, так как аргументов нет

// 8
function maxNumber(...args) {
  if (args.length < 1 || args.length > 5) {
    return "Должно быть от 1 до 5 чисел!";
  }
  var max = args[0];
  for (var i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}

console.log("Наибольшее из 1, 5, 2: " + maxNumber(1, 5, 2));
console.log("Наибольшее из 8, 3: " + maxNumber(8, 3));
console.log("Наибольшее из 9: " + maxNumber(9));

// 9
function evenOrOdd(start, end, isEven) {
    var result = [];
    for (var i = start; i <= end; i++) {
        if (isEven && i % 2 === 0) {
            result.push(i);
        } else if (!isEven && i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

console.log("Четные числа от 1 до 10: " + evenOrOdd(1, 10, true));
console.log("Нечетные числа от 1 до 10: " + evenOrOdd(1, 10, false));

// 10

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function nextDay(day, month, year) {
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(year)) {
    daysInMonth[2] = 29;
  }

  var day = day;
  var month = month;
  var year = year;

  day++;

  if (day > daysInMonth[month]) {
    day = 1;
    month++;

    if (month > 12) {
      month = 1;
      year++;
    }
  }

  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');
  const formattedYear = String(year);

  return `${formattedDay}.${formattedMonth}.${formattedYear}`;
}

console.log("Следующий день после 01.01.2023: " + nextDay(1, 1, 2023));
console.log("Следующий день после 28.02.2024: " + nextDay(28, 2, 2024));
console.log("Следующий день после 31.12.2023: " + nextDay(31, 12, 2023));