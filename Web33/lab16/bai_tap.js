// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function calcVolumeOfSphere(radius) {
  // gắn cho 1 biến bằng bán kính
  return (4 / 3) * Math.PI * (radius ^ 3);
}
console.log(calcVolumeOfSphere(2));
// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// khai báo hàm chứa 2 phần tử
// tìm ra số lớn hơn trong 2 số
//lặp từ số nhỏ đến lớn
function soNguyen(a, b) {
  // khai báo biến tổng
  let total = 0;
  //   let arr = [];
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  // chạy vòng lặp for để tính giá trị giữa chúng
  for (let i = min + 1; i < max; i++) {
    // Tính tổng giữa 2 số
    total += i;
  }
  return total;
}
console.log(soNguyen(1, 3));

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// khai báo hàm
function uoc(n) {
  // khai báo tổng
  let sum = 0;
  // chạy vòng lặp
  for (let i = 1; i <= n; i++) {
    // dk nếu n chia hết cho i thì in ra tổng
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(uoc(10));
// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

// khai báo hàm
function isPrime(n) {
  // nếu n<2 thì false
  if (n < 2) return false;
  //  chạy vòng lặp đến căn bậc 2 của n
  for (let i = 2; i < Math.sqrt(n); i++) {
    // xét đk nếu chia hết cho i =0
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(8));
console.log(isPrime(9));
// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.

function sumPrime(n) {
  // khai báo biến tổng =0
  let sum = 0;

  // chạy vòng lặp i =2 và i nhỏ hơn giá trị truyền vào
  for (let i = 2; i <= n; i++) {
    // dùng lại biến trên
    if (isPrime(i)) {
      // tính tổng
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrime(5));

//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.

/**
 * Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới
 *
 * @param {str} str chuỗi bất kì
 *
 * @return {str} Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ
 *
 */

function capitalizeWords(str) {
  // Chuyển về chữ thường
  str = str.toLowerCase();

  // Tách thành mảng các từ
  str = str.split(" ");

  // Lặp qua mảng
  for (let i = 0; i < str.length; i++) {
    // Lấy ký tự đầu tiên chuyển thành viết hoa và ghép với các ký tự còn lại
    const word = str[i];

    str[i] = word[0].toUpperCase() + word.slice(1);
  }
  // Ghép thành một chuỗi mới
  str = str.join(" ");

  return str;
} // Kết quả
console.log(
  " Chuyển chuỗi 'HELLO world' thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ:"
);
console.log(capitalizeWords("hello world")); // Kết quả
console.log("");

console.log("Bài 2");
//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
/**
 * Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case
 *
 * @param {str} str chuỗi bất kì
 *
 * @return {str} Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case
 *
 */

function toSpinalCase(str) {
  // Chuyển chữ hoa thành chữ thường và thay đổi các khoảng trắng hoặc dấu gạch ngang thành dấu gạch ngang duy nhất
  str = str.toLowerCase().replace(/[\s_]/g, "-");
  // Chuyển các chữ cái đầu tiên của từ thành chữ thường và chèn dấu gạch ngang giữa các từ
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return str;
}

console.log(" Chuyễn chuỗi ''HELLO world' thành dạng spinal:");
console.log(toSpinalCase("HELLO world")); // Kết quả
console.log("");

console.log("Bài 3");
//Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
/**
 * kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
 *
 * @param {str} str chuỗi bất kỳ
 *
 * @return {str} Kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
 *
 */

function isPalindromeString(str) {
  // Tạo 1 biến mới dạng chuỗi
  let onlyAlphabeStr = "";

  // Lặp qua từng ký tự trong chuỗi
  for (let char of str) {
    // Nếu là ký tự alphabe thì ghép vào biến, nếu là ký tự đặc biệt thì bỏ qua
    if (("a" <= char && char <= "z") || ("A" <= char && char <= "Z")) {
      onlyAlphabeStr += char;
    }
  }

  // Tạo chuỗi đảo ngược
  let reversed = onlyAlphabeStr.split("").reverse().join("");

  // So sánh 2 chuỗi
  return onlyAlphabeStr.toLowerCase() === reversed.toLowerCase();
}
console.log(" 'Race car' là chuỗi đối xứng:");
console.log(isPalindromeString("Race car")); // Kết quả
console.log(" 'hello world' là chuỗi đối xứng:");
console.log(isPalindromeString("hello world")); // Kết quả
console.log("");

console.log("Bài 4");

console.log("");

console.log(" * BÀI TẬP XỬ LÝ MẢNG");

//Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
console.log("Bài 1");
/**
 *
 * Hàm mới loại bỏ các giá trị sai trong 1 mảng
 *
 * @param {Array} arr các biến
 *
 * @return {Array} Mảng mới không chứa các giá trị sai
 */

function removeFalseValue(arr) {
  //Loại bỏ các giá trị sai
  const filteredArr = arr.filter((item) => {
    //Dùng filter() lọc ra các giá trị đúng (truthy) trong mảng bằng cách truyền vào hàm Boolean làm tham số cho phương thức filter().
    return Boolean(item);
    //Hàm Boolean sẽ loại bỏ tất cả các giá trị sai (falsy) khỏi mảng.
  });
  return filteredArr;
}

//ví dụ
const arr = [1, 2, "", null, false, undefined, 0, NaN, 3, "hello", "world"];

const filteredArr = removeFalseValue(arr);

console.log(
  " Mảng sau khi loại bỏ các giá trị sai bao gồm: false, null, undefined, NaN, 0, '''' là:",
  filteredArr
); // Kết quả
console.log("");

//Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
console.log("Bài 2");
/**
 *
 * Viết hàm lọc ra các phần tử có độ dài lớn nhất
 *
 * @param {arr} arr mảng các chuỗi
 *
 * @return {str} phần tử có độ dài lớn nhất
 */

function findLongest(arr) {
  const maxLength = arr.reduce((max, str) => Math.max(max, str.length), 0);
  //Giá trị khởi tạo của biến max được đặt là 0.
  //Sau đó, trong từng lần lặp, giá trị lớn hơn giá trị hiện tại của max sẽ được lưu vào biến max.
  return arr.filter((str) => str.length === maxLength);
  //Cuối cùng, giá trị của biến max sẽ là độ dài lớn nhất trong mảng ban đầu.
}
//Kết quả trả về là một mảng chứa các phần tử có độ dài lớn nhất.
console.log(
  ` Các phần tử có độ dài lớn nhất trong mảng  [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] là: ${findLongest(
    ["aba", "aa", "ad", "c", "vcd"]
  )}`
); // kết quả
console.log("");

//Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
console.log("Bài 3");
/**
 *
 * Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên)
 *
 * @param {Array}  arr1, arr2 2 mảng bất kỳ
 *
 * @return {Array} mảng mới
 */

function compareArrays(arr1, arr2) {
  const filteredArr = arr1
    .filter((num) => !arr2.includes(num))
    //Dùng filter() & includes() lọc ra các phần tử chỉ xuất hiện trong mảng thứ nhất hoặc mảng thứ hai (nhưng không xuất hiện trong cả hai mảng)
    .concat(arr2.filter((num) => !arr1.includes(num)));
  //Dùng concat() để tạo các phần tử lọc được được kết hợp với nhau thành một mảng mới chứa các phần tử không đồng thời nằm trong hai mảng ban đầu, rồi trả về mảng mới đó.
  return filteredArr;
}

//ví dụ
const arr1 = [1, 2, 3];
const arr2 = [1, 3, 4, 5, 5];
const comparedArr = compareArrays(arr1, arr2);

console.log(
  " Truyền vào 2 mảng [1, 2, 3] và [1, 3, 4, 5, 5] thì mảng mới chỉ chứa những phần tử không đồng thời nằm trong 2 mảng là:"
);
console.log(comparedArr); // Kết quả
console.log("");

//Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau[ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
console.log("Bài 4");
console.log("");

console.log(" * BÀI TẬP XỬ LÝ OBJECT");

// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
let ageSapXep = [
  { name: "Hiệu", age: 21 },
  { name: "Quang", age: 23 },
  { name: "Hiếu", age: 18 },
  { name: "Tuấn", age: 90 },
  { name: "Ba", age: 50 },
];

//lọc qua các phần tử

function calculateAverageAge(ageSapXep) {
  // khai báo tổng = 0
  let sumOfAges = 0;
  // chạy vòng lặp
  for (let i = 0; i < ageSapXep.length; i++) {
    // tính tổng của tuổi hs
    sumOfAges += ageSapXep[i].age;
  }
  // giá trị trả về là tổng gtri chia cho tổng số đối tượng
  return sumOfAges / ageSapXep.length;
}
const averageAge = calculateAverageAge(ageSapXep);
console.log(averageAge);

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
ageSapXep.sort(function (a, b) {
  return a.age - b.age;
});
console.log(ageSapXep);

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

ageSapXep.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }
});
console.log(ageSapXep);

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
// khai báo hàm
// const sapXep = ageSapXep.filter((i) => {
//   return i.name == "h";
// });
// console.log(sapXep);

// function sapXep() {
//   // tạo ra 1 mảng rỗng chứa kí tự name
//   let t = [];
//   for (let i = 0; i < arr.length; i++) {
//     return t.name[i];
//   }
// }
// console.log(sapXep);

function filterName(ageSapXep) {
  // trả về số tuổi của mảng
  return ageSapXep.filter(function (ageSapXep) {
    // trả về tên của mảng và đưa về chữ thường, đối tượng bắt đầu từ h sẽ in ra
    return ageSapXep.name.toLowerCase().startsWith("h");
  });
}
const filteredHieu = filterName(ageSapXep);
console.log(filteredHieu);
