console.log(" * BÀI TẬP XỬ LÝ SỐ");
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
/**
 *
 * Tính thể tích hình cầu
 *
 * @param {number} radius Bán kính hình cầu
 *
 * @return {number} Thể tích hình cầu
 */
console.log("Bài 1");
function calcVolumeOfSphere(radius) {
  const V = (4 * Math.PI * Math.pow(radius, 3)) / 3;
  // Công thức tính thể tích của hình cầu : V =(4/3) * PI * r^3
  let rounder = V.toFixed();
  // Làm tròn kết quả có chữ số thập phân
  return rounder;
}

console.log(
  ` Thể tích hình cầu khi bán kính bằng 3 = ${calcVolumeOfSphere(3)} cm3`
); // Kết quả
console.log(
  ` Thể tích hình cầu khi bán kính bằng 4 = ${calcVolumeOfSphere(4)} cm3`
); // Kết quả
console.log(
  ` Thể tích hình cầu khi bán kính bằng 5 = ${calcVolumeOfSphere(5)} cm3`
); // Kết quả
console.log("");

console.log("Bài 2");
//Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
/**
 * Tính tổng các số nguyên nằm giữa 2 số
 *
 * @param {number} a số nguyên a
 *
 * @param {number} b số nguyên b
 *
 * @return {number} Tổng các số nguyên nằm giữa a & b
 */

function calcSum(a, b) {
  let Tong = 0;
  // Gán giá trị tổng ban đầu = 0
  const long = Math.abs(a - b) + 1;
  // Công thức tính : S = (a + b) * (|a - b| + 1) / 2
  Tong = ((a + b) * long) / 2;
  return Tong;
}

console.log(` Tổng tất cả các số nguyên nằm giữa 1 và 3 là : ${calcSum(1, 3)}`); // Kết quả
console.log(` Tổng tất cả các số nguyên nằm giữa 2 và 5 là : ${calcSum(2, 5)}`); // Kết quả
console.log(` Tổng tất cả các số nguyên nằm giữa 4 và 8 là : ${calcSum(4, 8)}`); // Kết quả
console.log("");

console.log("Bài 3");
//Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
/**
 * Tính tổng các ước của số nguyên dương
 *
 * @param {number} n số nguyên dương n
 *
 * @return {number} Tổng các ước số nguyên dương
 */

function calcSumOfNumber(n) {
  let Tong = 0;

  for (let i = 1; i <= n; i++) {
    // Duyệt qua từng số từ 1 đến number
    if (n % i === 0) {
      Tong += i;
      // Nếu i là ước của n (tức là n chia hết cho i), thì cộng i vào biến Tong
    }
  }
  return Tong;
}

console.log(` Tổng của các ước số của 3 là : ${calcSumOfNumber(3)}`); // Kết quả
console.log(` Tổng của các ước số của 4 là : ${calcSumOfNumber(4)}`); // Kết quả
console.log(` Tổng của các ước số của 5 là : ${calcSumOfNumber(5)}`); // Kết quả
console.log("");

console.log("Bài 4");
//Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
/**
 * Kiểm tra số có phải là số nguyên tố
 *
 * @param {number} n số nguyên dương bất kỳ
 *
 * @return {number} Kiểm tra số có phải số nguyên tố
 *
 */

function isPrime(n) {
  if (n < 2) {
    return false;
    //Nếu n < 2, trả về false
  }
  if (n === 2) {
    return true;
    //Nếu n = 2, trả về true
  }
  if (n % 2 === 0) {
    return false;
    //Nếu n chia hết cho 2, trả về false
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2)
    // Sử dụng Math.sqrt(n) tính căn bậc hai của n và i += 2 để bỏ qua các số chẵn trong vòng lặp
    if (n % i === 0) {
      // i chạy từ 3 đến căn bậc hai của n, kiểm tra nếu n chia hết cho i,trả về false và ngược lại
      return false;
    }
  return true;
}

console.log(` Số 1 là số nguyên tố : ${isPrime(1)}`); // Kết quả
console.log(` Số 0 là số nguyên tố : ${isPrime(0)}`); // Kết quả
console.log(` Số 5 là số nguyên tố : ${isPrime(5)}`); // Kết quả
console.log(` Số 7 là số nguyên tố : ${isPrime(5)}`); // Kết quả
console.log("");

console.log("Bài 5 ");
//Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
/**
 * Tính tổng các số nguyên tố nhỏ hơn số nguyên dương truyền vào
 *
 * @param {number} n số nguyên dương bất kỳ
 *
 * @return {number} Tính tổng các số nguyên tố nhỏ hơn số nguyên dương truyền vào
 *
 */

function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    // Dùng vòng lặp duyệt các số từ 2 đến n
    if (isPrime(i)) {
      sum += i;
      // Nếu là số nguyên tố, cộng vào biến sum
    }
  }
  return sum;
}

console.log(
  ` Tổng của các số nguyên tố trong khoảng từ 1 đến 8 là : ${sumOfPrimes(8)}`
); // Kết quả
console.log(
  ` Tổng của các số nguyên tố trong khoảng từ 1 đến 30 là : ${sumOfPrimes(30)}`
); // Kết quả
console.log("");

console.log(" * BÀI TẬP XỬ LÝ CHUỖI");

console.log("Bài 1");
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

//Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
console.log("Bài 1");
/**
 *
 * Tính ra số tuổi trung bình của toàn bộ sinh viên
 *
 * @param {Array}  mảng object chứa thông tin sinh viên
 *
 * @return {number} số tuổi trung bình của toàn bộ sinh viên
 */
function theAverageAge(Array) {
  // Khai báo mảng chứa thông tin các sinh viên
  const sortedArray = Array.sort((a, b) => a.age - b.age);
  // Gọi hàm theAverageAge(Array) () và truyền vào Array để tính số tuổi trung bình của toàn bộ sinh viên
  const AverageAge =
    sortedArray.reduce((acc, cur) => acc + cur.age, 0) / sortedArray.length;
  // Sắp xếp mảng các object theo tuổi (age) & sử dụng method reduce() để tính tổng số tuổi của toàn bộ sinh viên.
  return AverageAge;
}

//ví dụ
const Array = [
  { name: "Huy", age: 20 },
  { name: "An", age: 19 },
  { name: "Hiếu", age: 18 },
];

const AverageAge = theAverageAge(Array);

console.log(` Tuổi trung bình của toàn bộ sinh viên là: ${AverageAge}`); // Kết quả
console.log("");

//Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
console.log("Bài 2");
/**
 *
 * Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp
 *
 * @param {Array} Array1 mảng các object truyền vào
 *
 * @return {Array} mảng mới được sắp xếp lại
 */

function arrangeAge(Array1) {
  //khai báo mảng Array chứa thông tin của các sinh viên.
  const sortedArray1 = Array.sort((a, b) => b.age - a.age);
  // Gọi hàm arrangeAge(Array1) và truyền vào sortedArray1 để sắp xếp lại mảng các object theo trường tuổi (age) từ cao đến thấp.
  return sortedArray1;
}

const sortedArray2 = arrangeAge(Array);

console.log(
  " Mảng sinh viên sau khi sắp xếp theo tuổi học viên từ cao đến thấp là:"
);
console.log(sortedArray2); // Kết quả
console.log("");

//Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
console.log("Bài 3");
/**
 *
 * Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường)
 *
 * @param {Array} Array2 mảng các object truyền vào
 *
 * @return {Array} mảng mới được sắp xếp lại
 */

function sortStudentsByName(arr) {
  // Sắp xếp mảng theo tên học viên
  arr.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA.localeCompare(nameB);
    // Chuyển tên về chữ in hoa bằng toUpperCase() rồi sử dụng localeCompare() để so sánh chuỗi theo thứ tự từ điển.
  });
  //Kết quả của phương thức localeCompare() là một số nguyên dương, âm hoặc bằng 0 tương ứng với thứ tự từ điển của hai chuỗi.
  return arr;
}

// Ví dụ
const students = [
  { name: "Huy", age: 20 },
  { name: "Hiếu", age: 18 },
  { name: "anh", age: 19 },
  { name: "Nam", age: 21 },
];

const sortedStudents = sortStudentsByName(students);

console.log(" Mảng sinh viên sau khi sắp xếp theo tên học viên là:");
console.log(sortedStudents); // Kết quả
console.log("");

//Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
console.log("Bài 4");
/**
 *
 * Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''
 *
 * @param {Array} Array3 mảng các object truyền vào
 *
 * @return {Array} Mảng mới sau khi lọc
 */
function filterStudentsByName(Array3) {
  const filteredArr = Array3.filter(
    (student) => student.name.charAt(0).toLowerCase() === "h"
  );
  //Hàm filter sẽ lọc ra các phần tử của mảng Array3 thỏa mãn điều kiện là tên bắt đầu bằng chữ ''H'' hoặc ''h'' và trả về một mảng mới chứa các phần tử đó.
  return filteredArr.sort((a, b) => a.name.localeCompare(b.name));
  //Sử dụng hàm sort để sắp xếp các phần tử theo thứ tự tên. Để so sánh chuỗi theo thứ tự alphabet, sử dụng localeCompare.
}
//Ví dụ
const studentArr = [
  { name: "Huy", age: 20 },
  { name: "Hiếu", age: 18 },
  { name: "An", age: 19 },
  { name: "hung", age: 21 },
];
//Cuối cùng, hàm trả về mảng mới chứa các phần tử đã được lọc và sắp xếp.
const result = filterStudentsByName(studentArr);
console.log(
  " Mảng sinh viên sau khi lọc có tên bắt đầu bằng chữ 'H' hoặc 'h' là:"
);
console.log(result); // Kết quả
console.log("");

console.log(" * BÀI TẬP TỔNG HỢP");
//Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
console.log("Bài 1");
/**
 *
 * Viết hàm trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t
 *
 * @param {number} x số giây truyền vào
 *
 * @param {str} t chuỗi thời gian truyền vào
 *
 * @return {str} Chuỗi mới
 */

function addSeconds(t, x) {
  const timeArr = t.split(":");
  // Tách chuỗi thời gian thành mảng giờ, phút, giây
  let hours = parseInt(timeArr[0]); // Lấy giờ
  let minutes = parseInt(timeArr[1]); // Lấy phút
  let seconds = parseInt(timeArr[2]); // Lấy giây

  // Cộng thêm số giây x vào thời gian hiện tại
  let totalSeconds = hours * 3600 + minutes * 60 + seconds + x;

  // Tính lại giờ, phút, giây mới
  hours = Math.floor(totalSeconds / 3600);
  minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  seconds = totalSeconds - hours * 3600 - minutes * 60;

  // Chuyển đổi lại thành chuỗi thời gian
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
console.log(
  " Chuỗi biểu thị thời gian trả về sau 7 giây kể từ thời điểm 09:20:56 là:"
);
console.log(addSeconds("09:20:56", 7)); // Kết quả
console.log("");

//Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
console.log("Bài 2");
/**
 *
 * Viết hàm trả về số ngày để con ốc sên leo lên miệng giếng
 *
 * @param {number} h chiều cao giếng
 *
 * @param {number} x số mét leo lên ban ngày
 *
 * @param {number} y số mét tụt xống ban đêm
 *
 * @return {number} số ngày leo lên miệng giếng
 */

function calculateDaysToReachTop(h, x, y) {
  const dailyDistance = x - y;
  // Gọi quãng đường mà ốc sên leo được trong một ngày là (x - y) mét.
  const days = Math.ceil(h / dailyDistance);
  // Chia chiều cao của giếng cho tổng quãng đường
  return days;
}

console.log(
  " Nếu giếng sâu 20m, mỗi ngày ốc sên leo lên 5m và ban đêm tụt xuống 3m thì số ngày cần để ốc sên leo từ đáy lên đến miệng giếng là:"
);
console.log(calculateDaysToReachTop(20, 5, 3)); // kết quả
console.log("");

//Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
console.log("Bài 3");
