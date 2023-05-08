// function chiaHet(a) {
//   if (a % 3 === 0 && a % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (a % 3 === 0) {
//     console.log("Fizz");
//   } else if (a % 5 === 0) {
//     console.log("Buzz");
//   }
// }
// const a = 15;
// console.log(chiaHet(a));

// function findSeason(month) {
//   // Code
//   if (month >= 3 && month <= 5) {
//     console.log("Spring");
//   } else if (month >= 6 && month <= 8) {
//     console.log("Summer");
//   } else if (9 <= month <= 11) {
//     console.log("Fall");
//   } else {
//     console.log("Winter");
//   }
//   return month; // Kết quả
// }
// const month = 11;
// console.log(findSeason(month));

function solveEquation(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    console.log("Phương trình vô nghiệm");
    return null;
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép");
    return x;
  } else if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm phân biệt");
    return [x1, x2];
  }
}
// const a = 2,
//   b = -7,
//   c = 3;
console.log(solveEquation(a, b, c));
