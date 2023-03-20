// In ra dãy số chẵn trong khoảng từ 1 - 100
function printEvenNumbers() {
  // Code

  // for (let i = 0; i <= 100; i += 2) {
  //   console.log(i);
  // }

  let i = 0;
  while (i <= 100) {
    console.log(i);

    i += 2;
  }
}

console.log(`Dãy số chẵn trong khoảng từ 1 - 100`);
// printEvenNumbers();

// In ra dãy số lẻ trong khoảng từ 1 - 100 theo thứ tự giảm dần
function printOddNumbers() {
  // Code
  // for (let i = 99; i > 0; i -= 2) {
  //   console.log(i);
  // }

  let i = 99;

  while (i > 0) {
    console.log(i);

    i -= 2;
  }
}
console.log(`Dãy số lẻ trong khoảng từ 1 - 100 theo thứ tự giảm dần`);
// printOddNumbers();

// Tính tổng các số chẵn trong khoảng 1 - n
function sumOfEvenNumbers(n) {
  let tong = 0;
  // for (i = 0; i <= 100; i += 2) {
  //   tong += i;
  // }

  // return tong;
  let i = 0;
  while (i <= 100) {
    tong += i;

    i += 2;
  }
  return tong;
}

console.log(`Tổng các số chẵn trong khoảng 1 - 100: ${sumOfEvenNumbers(100)}`);

// Tính tổng các số chia hết cho cả 3 và 5 trong khoảng 1 - n
function sumOfNumbersDivisibleBy3And5(n) {
  // Code
  // let sum = 0;

  // for (let i = 1; i <= n; i++) {
  //   if (i % 15 == 0) sum += i;
  // }

  let sum = 0;
  let i = 1;

  while (i <= n) {
    if (i % 15 == 0) {
      sum += i;
      i += 15;
    } else {
      i++;
    }
  }

  return sum; // Kết quả
}

console.log(
  `Tổng các số chia hết cho 3 và 5 trong khoảng 1 - 100: ${sumOfNumbersDivisibleBy3And5(
    100
  )}`
);

// In ra các ước số của một số
function printDivisorOfNumber(n) {
  // Code

  // for (i = 1; i <= n; i++) {
  //   if (n % i === 0) {
  //     console.log(i);
  //   }
  // }
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      console.log(i);
    }
    i++;
  }
  return;
}

console.log(`Các ước số của 12`);
// printDivisorOfNumber(12);

// In ra số bảng cửu chương của 1 số
// 1 x 1 = 1
// 1 x 2 = 2
// ...
function printTimesTableOf(n) {
  for (let i = 1; i <= 10; i++) {
    let cuuchuong = n * i;
    console.log(`${n} x ${i} = ${cuuchuong}`);
  }

  // let i = 1;
  // for (i <= 10) {
  //   let cuuchuong = n * i;
  //   console.log(`${n} x ${i} = ${cuuchuong}`);
  //   i++;
  // }
}

console.log(`Bảng cửu chương của 1`);
// printTimesTableOf(5);

// In ra bảng cửu chương từ 1 đến 10
// 1 x 1 = 1
// 1 x 2 = 2
// ..
// 2 x 1 = 2
// 2 x 2 = 4
// ...
function printTimesTable() {
  for (n = 1; n < 11; n++) {
    printTimesTableOf(n);
  }
}

console.log(`Bảng cửu chương`);
printTimesTable();

// Giải bài toán dân gian
// Vừa gà vừa chó
// Bó lại cho tròn
// Ba mươi sáu con
// Một trăm chân chẵn
// In ra số chân gà và chó
function findLegs() {
  // Code
  const CHICKEN_LEGS = 2;
  const DOG_LEGS = 4;
  const TOTAL = 36;
  const TOTAL_LEGS = 100;

  let chicken = 1;
  let dogs = TOTAL - chicken;

  // for (
  //   ;
  //   chicken * CHICKEN_LEGS + dogs * DOG_LEGS != TOTAL_LEGS;
  //   chicken++, dogs--
  // ) {}

  while (chicken * CHICKEN_LEGS + dogs * DOG_LEGS != TOTAL_LEGS) {
    chicken++;
    dogs--;
  }

  console.log(`Số gà là ${chicken}, số chó là ${dogs}`);
}
findLegs();

// Hình 1

// Số hàng, số cột

// ```
// * * * *
// * * * *
// * * * *
// * * * *
// * * * *
// ```

function printPatternLine1(col) {
  let str = "";

  for (let i = 1; i <= col; i++) {
    str += "* ";
  }

  console.log(str);
}

function printPattern1(row, col) {
  // lặp theo hàng
  for (let i = 1; i <= row; i++) {
    // với mỗi hàng
    printPatternLine1(col);
  }
}

printPattern1(5, 6);
// Hình 2

// ```
// * * * *
// *     *
// *     *
// *     *
// * * * *
// ```

function printPatternLine2(col) {
  let str = "";

  for (let i = 1; i <= col; i++) {
    if (i == 1 || i == col) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}

function printPattern2(row, col) {
  // Lặp theo hàng
  for (let i = 1; i <= row; i++) {
    // Với mỗi 1 hàng
    // Kiểm tra xem là hàng đầu hay là hàng cuối
    if (i == 1 || i == row) {
      printPatternLine1(col);
    } else {
      printPatternLine2(col);
    }
  }
}

console.log(`Pattern 2`);
printPattern2(6, 6);

// Hình 3

// ```
// *           *
//   *       *
//     *   *
//       *
//     *   *
//   *       *
// *           *
// ```
function printPattern3(n) {
  // lặp theo hàng
  for (let i = 1; i <= n; i++) {
    let str = "";

    // lặp theo cột
    for (let j = 1; j <= n; j++) {
      if (i == j || j == n - i + 1) {
        str += "* ";
      } else {
        str += "  ";
      }
    }

    console.log(str);
  }
}

console.log("Pattern 3");
printPattern3(7);

// Hình 4

// ```
// *
// * *
// * * *
// * * * *
// ```
function printPattern4(n) {
  for (let i = 1; i <= n; i++) {
    printPatternLine1(i);
  }
}

console.log("Pattern 4");
printPattern4(5);

// function printPattern5(n) {
//   for (let i = 1; i <= n; i++) {
//     printPattern1(i);
//   }
// }
// console.log("pattern 5");
// printPattern5(4);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(7));

console.log("tong so nguyen to");
function sumOfPrimes(n) {
  // Code
  let tong = 0;
  for (i = 0; i <= n; i++)
    if (isPrime(i)) {
      tong += i;
    }
  return tong;
}

console.log(`Tổng các số chẵn trong khoảng 1 - n: ${sumOfPrimes(10)}`);

// bài 3
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let prev1 = 0;
  let prev2 = 1;
  let current = 0;
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}
console.log(fibonacci(2));

// Bìa 4

function tinhGiaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * tinhGiaiThua(n - 1);
  }
}
console.log(tinhGiaiThua(10));
// bài5
function kiemTraStrong(n) {
  let sum = 0;
  let m = n; // lưu giữ giá trị ban đầu của n

  while (m > 0) {
    let digit = m % 10;
    sum += tinhGiaiThua(digit);
    m = Math.floor(m / 10);
  }

  return sum === n;
}
console.log(kiemTraStrong(9));
