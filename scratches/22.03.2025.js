// 1
function stringFrom(...args) {
  return args.join(' ');
}

console.log(stringFrom('I have', 5, 'apples'));
console.log(stringFrom('X value is', true));

// 2
function findMin(...args) {
  if (args.length === 0) {
    return undefined;
  var min = args[0];
  for (var i = 1; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

console.log(findMin(5, 2, 8, 1, 9));
console.log(findMin(-1, 0, 5));
console.log(findMin());

// 3
function numbers(...args) {
  var count = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      count++;
    }
  }
  return count;
}

console.log(numbers(1, 2, "a"));
console.log(numbers(true, 2, false));
console.log(numbers());

// 4
function mean(...args) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      sum += args[i];
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

console.log(mean(1, 2, "a"));
console.log(mean(true, 2, false));
console.log(mean());
console.log(mean(1, 2, 3, 4, 5));


// 5
function isPowerOfTwo(num) {
  if (num <= 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  if (num % 2 !== 0) {
    return false; //
  }

  return isPowerOfTwo(num / 2);
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(12));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-4));
console.log(isPowerOfTwo(1024));