// // let date1 = new Date();
// // console.log(date1.getDay());
// // console.log(date1.getFullYear());
// // console.log(date1.getMonth());
// // console.log(date1.getUTCDate);

// // function getCurrentDate() {
// //   // Code
// //   const now = new Date();

// //   const year = now.getFullYear();
// //   const month = now.getMonth() + 1;
// //   const date = now.getDate();

// //   return `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(
// //     2,
// //     "0"
// //   )}`; // Kết quả
// // }

// // console.log(getCurrentDate());

// const arr = [1, "two", true, {}, []];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(arr[i]);
//   }
// }
// function persons(arr) {
//   // arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       console.log(arr[i]);
//     }
//   }
// }
// console.log(persons(["hiệu", "Ba", "Quang"]));

// let obj = {
//   color: "Red",
//   said: "Gâu",
//   weight: 34,
//   height: 12,
//   "name":"Quang",
// };
// console.log(obj["name"]);

// function maxOf() {
//   let max = -1;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) max = arguments[i];
//   }
//   return max;
// }
// console.log(maxOf(1, 2, 4, 5, 6, 3, 32, 33, 2));
// function findMostCommonCharacter(str) {
//   // Code
//   // Tạo object để đếm ký tự
//   let count = {};

//   // Lặp qua từng ký tự trong chuỗi
//   for (let char of str) {
//     // Nếu ký tự char đã có trong count thì tăng lượt đếm lên 1
//     if (char in count) count[char]++;
//     // Nếu chưa có thì gán cho giá trị bằng 1
//     else count[char] = 1;
//   }

//   // Khai báo 2 biến, 1 biến là ký tự có số lần xuất hiện nhiều nhất
//   // và 1 biến là số lần xuất hiện của ký tự đó
//   let commonChar = null;
//   let maxOccurs = 0;

//   // Duyệt qua từng key trong object count
//   for (let key in count) {
//     // Lấy số lần xuất hiện ra
//     let value = count[key];

//     // Nếu ký tự này có số lần xuất hiện lớn hơn
//     if (value > maxOccurs) {
//       // Thì gán ký tự commonChar là ký tự hiện tại
//       commonChar = key;
//       // Và số xuất hiện lớn nhất là value
//       maxOccurs = value;
//     }
//   }

//   return { [commonChar]: maxOccurs }; // Kết quả
// }

// console.log(findMostCommonCharacter("hello world"));

function getLastDayInMonth(dateString) {
  // tạo object  date
  const date = new Date(dateString);
  //set tháng +1;
  date.setMonth(date.getMonth() + 1, 0);
  return date.getDate();
}
console.log(getLastDayInMonth("2023-03-24"));

// function calcAge(birthdayString){
//   // lấy thời gian hiện tại
//   const now = new Date();
//   // Lấy ngày sinh
//   const birthday =new Date(birthdayString)
//   // Biến kết quả
//   let result = {
//     year:0,
//     month:0,
//     days:0,
//   }
//   // Lấy các thông tin ngày tháng
//   const currentYear = now.getFullYear();
//   const currentMonth = now.getMonth() + 1;
//   const currentDate = now.getDate();

//   const birthdayYear = birthday.getFullYear();
//   const birthdayMonth = birthday.getMonth();
//   const birthdayDate = birthday.getDate();
//   // kiểm tra tháng sinh
//   // Nếu tháng sinh trước tháng hiện tại, tức chưa đên sinh nhật
//   if(birthdayMonth < currentMonth){
//     result.year = currentYear - birthdayYear-1;

//     birthday.setFullYear(currentYear -1)

//     result.days = getDaysUn

//   }

// }

// const arr = [1, 2, 3, 4];
// function square(n) {
//   // tính bình phương giá trị
//   const result = n * n;
//   //in ra
//   console.log(result);
// }
// // lặp qua từng phần tử của mảng
// for (let value of arr) {
//   // Với mỗi giá trị, thì gọi hàm square 1 lần
//   square(value);
// }
// // Lặp qua từng giá trị của mảng,
// // Với mỗi 1 giá trị thì gọi hàm square 1 lần,
// arr.forEach(square); // callback
// // sort, filter,,find,findIndex,reduce,some, every

const arr2 = [1, 2, 3, 4, 5];
// Tìm phần tử đầu tiên là số chẵn
function isEven(n) {
  return n % 2 == 0;
}
// Duyệt qua từng phần tử
for (let n of arr2) {
  // Với mỗi phần tử kiểm tra là số chẵn hay không
  if (isEven(n)) {
    // Thì gán result = n
    result = n;
    // Và ngắt vòng lặp
  }
  break;
}
console.log(result);
// Duyệt qua các phần tử trong mảng gọi hàm isEven 1 lần
// Nếu isEven trả về true thì dừng, và trả về kết quả
const result2 = arr2.find(isEven);
console.log(result2);

arr3 = [1, 2, 3, 4, 5];
// lấy ra tất cả các phần tử trong mảng
// Tạo mảng kết quả
let result3 = [0];
// Duyệt qua các phần tử trong mảng
for (let n of arr3) {
  // Với mỗi phần tử
  // Kiểm tra xem có phải số chẵn hay không
  if (isEven(n)) {
    // Nếu là số chẵn thì push vào mảng kết quả
    result3.push(n);
  }
}
console.log(result3);

// Duyệt qua các phần tử trong mảng
// với mỗi phần tử, gọi hàm is Even 1 lần xem là true hay false
// nếu là true thêm vòa mảng kết quả
const result33 = arr3.filter(isEven);
console.log(result33);
const arr4 = [1,2,3,4,5];
// tôi muốn biến đổi tất cả só trong mảng thành x2 lần giá trị lên
// [ 2,4,6,8,10]
function double(n){
  return n*2
}
// tạo mảng chứa kết quả
let result4 =[];
// DUyệt qua từng phần tử trong phần tử'
for (let n of arr4){
  // với mỗi phần tử thì x2 lên
  let temp = double(n);
  // Thêm vào mảng kết quả
  result4.push(temp)
}



