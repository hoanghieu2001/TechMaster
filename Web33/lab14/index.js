// // let arr= [ 2,3,5,6,6];

// // lấy số ngãu nhiên từ 0- number
// // Math.random(Math.random() * Number);
// // // console.log(arr)
// // // lấy sô ngẫu nhiên a-> b
// // Math.floor(Math.random() * (b - a) + a);

// // mảng : ghi, sửa, xóa
// // chuỗi: chỉ đọc

// // Chuỗi thì sẽ trả về chuỗi mới
// // let a = { name: "Hiệu", color: "red" };
// let myName = "Ba Nguyễn";

// // Số kí tự trong chuỗi
// console.log(`So ki tự trong chuỗi : ${myName.length}`);
// /// lặp qua từng kí tự
// for (let i = 0; i < myName.length; i++) {
//   console.log(character);
// }
// for (let character of myName) {
//   console.log(character);
// }

// console.log(myName.endsWith("n"));
// console.log(myName.endsWith("N"));
// console.log(`Mã unicode của kí tự 'a' là: ${"a".charCodeAt(0)}`);
// console.log(`Kí tự có mã unicode 97: ${String.fromCharCode(97)}`);

// console.log(`Cắt theo dấu '':${myName.split("")}`);
// console.log(`Cắt từng chữ cái $`);

// 2. Viết hàm trả về chuỗi mới đảo ngược thứ tự chữ cái của chuỗi truyền vào
// function reverseString(str) {
//   // Code
//   // tách thành mảng
//   str = str.split("");
// đảo ngược mảng
//   str.reverse();

//   // ghép thành chuỗi
//   str = str.join("");
//   return str; // Kết quả
// }
// console.log(reverseString("Hello World"));

// // Date

// const now = new Date();
// console.log(now);

// const birthday = new Date("1992-05-24");
// console.log(birthday);

// const today = new Date(2023, 2, 22);
// console.log(today);

// const time = Date.now();
// console.log(time);

// console.log(birthday.getMonth());
// console.log(birthday.getTimezoneOffset());
// console.log(birthday.getDate());
// console.log(birthday.setDate(2));
// // let Date = new Date();
// // console.log(time.toLocaleTimeString("jp-JP"));
// function getDaysBetweenDates(dateString1, dateString2) {
//   // Code
//   const date1 = new Date(dateString1);
//   const date2 = new Date(dateString2);

//   const time1 = date1.getTime();
//   const time2 = date2.getTime();

//   const diff = time2 - time1;

//   const dayDiff = Math.floor(diff / (24 * 60 * 60 * 1000));

//   return dayDiff; // Kết quả
// }

// console.log(getDaysBetweenDates("2001-12-08", "2023-03-22"));

// Với giá trị là chuỗi => gọi sort
const strArr = ["Ba", "Hiệu", "Tuấn", "Vũ", "anh"];
// const arr6 = [2,5,6,3,1,4];
strArr.sort();
console.log(strArr);
