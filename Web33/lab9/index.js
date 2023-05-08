//Cậu lệnh này để in ra terminal  (console)
//1 dòng thông báo
// Thường sử dụng để in ra các giá trị cho mục đich khác nhau:
// -Kiểm tra
// - Gỡ lỗi
// - kết quả tính toán của chương trình
console.log("Hello javaCript");

console.log("My name is Hoàng Hiệu");

console.log("I'm 22 year old");

console.log("Tôi ở Việt Nam");

// Biến
// Dùng đẻ đặt tên cho dữ liệu
// Hạn hế việc tính toán lại
// Biến là 1 định danh hay là tên để lưu trữ dữ liệu

// Có 3 cú pháp để khai báo
// - Var - cú pháp cũ không dùng nữa
// -let- Cho phép gắn lại giá trị (thay đổi giá trị)
//- const - Hằng số (không ccho phép thay đổi giá trị)

// Cú pháp tổng quát
// Keyword variableName- value;
let myName = "Hoang Hieu";
let myAge = "16";
console.log(myName);
console.log(myAge);
// các kiểu dữ liệu trong javaCript
// Biểu diễn số
// Giới hạn ở -2^63 -2^63
123;
123.456; // số thực
0123; // Octan - Lưu ý về trường hợp số 0 ở đầu;
console.log(Infinity); // Số dương vô cùng
console.log(-Infinity); // Số âm vô cùng
console.log(1 - "abc"); //NaN - kết quả phép tính sai

// Số (cực kì lớn) -bigint
// Thường không dùng đến

// Chuỗi string
console.log("Đây là một chuỗi ký tự");
console.log(`Đây là một chuỗi ký tựu`);
console.log(`Đây cũng là một chuỗi \nNew line`);
console.log("Chèn ký tự ' vào chuỗi");
console.log(`Chèn nhiều "" ' \ ''`);
// Nối chuỗi
const message = "Hello, I'm " + myName;
console.log(message);
const newMessage = `Hello, I'm $(myname)`;
console.log(newMessage);
// Logic -boolean
true; // hằng số logic
false;

// undefined
undefined;
//null
null; /// Kiểu "object"

//Symbol

// Object
const me = {
  // key value,
  name: "Hieu",
  age: "18",
  isHandSome: true,
  isMarried: false,
};

// function - hàm

// Cách tổ chức mã, cho phép đóng gói các câu lệnh
// và tái sử dụng
// Cách thức cơ bản nhất để tổ chức chương trình
// Mỗi 1 hàm giống như 1 chương trình nhỏ
// function Tên_hàm(tham_số) { thân_hàm}
function sum() {
  const ketQua = 1 + 2 + 3 + 4;
  console.log(ketQua);
}
// Gọi hàm - invoke
sum();

const typeOfSum = typeof sum;
console.log("Kiểu dữ liệu của sum là", typeOfSum);

// Không được khai báo 2 biến là let cùng giá trị
// const có thể viết lại và thay đổi được

//Tên biến dược chưa kí tự số, hoặc kí tự đặc biệt $ và _
// Tên biến không được bắt đầu bằng 1 sô
// Tên biến có phân biệt chữ hoa, chữ thường
// Tên biến không được trùng với từ khóa của javaScript

// const my_birthday = "2001-08-12";

// const kq = myAge - 15;
// var let dùng được

// console.log=(kq)

let interger = 1;
let float = 1.5;
// Một số giá trị số đặc biệt
Infinity; /// 1/ 0
-Infinity; //-1 / 0
NaN; // Not a number

// Local vs Global
// Chỉ phạm vi hoạt động của biến

// global là tất cả biến khai báo ở bên ngoài hàm
// biến global thì có thể truy cập ở mọi nơi
// Best PRACTIVE
//Hạn chế truy cập bên ngoài global
let global = 10;

function demo() {
  //Biến được khai báo trong hàm được gọi là
  // Biến local -cục bộ
  // Có nghĩa là chỉ được phép truy cập bên trong hàm
  let local = 1;
  console.log("Biến local; ", local);
}
demo();
// console.log("In ra gia trị của biến local:", local);
console.log("Biến global:", global);

function greeting(name) {
  //Tham số giá trị
  console.log(`Hello, ${name}`);
  console.log("Welcome to my website");
}
greeting(/*arguments*/ myName);
greeting("Bé ú");
greeting("Hit");
greeting("Hoàng");
greeting("Văn");
// greeting();

console.log(greeting("Hieu"));

function sum(a, b) {
  const local = a + b;
  // trả lại vị trí cho(câu lệnh gọi làm sum)
  return local;
}
const totalOf3and5 = sum(3, 5);
const totalOf11and35 = sum(11, 35);
console.log(totalOf11and35);

// Viết các hàm tương ứng với các phép tính - * /

function minus(a, b) {
  const local = a - b;
  return local;
}
const totalOf9and3 = minus(9, 3);
console.log(totalOf9and3);

function multiply(a, b) {
  const local = a * b;
  return local;
}
const total8and4 = multiply(8, 4);
console.log(total8and4);

function divistion(a, b) {
  const local = a / b;
  return local;
}
const total8and2 = divistion(8, 2);
console.log(total8and2);

console.log(null + 1);

// Viết hàm tính chu vi hình tròn
// 2* pi *r
// function circumferenceOfCircle(r) {
//   // const r = 2;
//   const result = 2 * Math.PI * r;
//   return result;
// }
// console.log("chu vi đường tròn có bản kính 2cm = " + circumferenceOfCircle);

// let banKinh = 5;
// let dienTich = Math.PI * banKinh * banKinh;
// console.log("Diện tích của hình tròn là: " + dienTich);
// function dienTichHinhTron(banKinh) {
//   const dienTich = Math.PI * banKinh * banKinh;
//   return dienTich;
// }
// const banKinh = 9;
// const dienTich = dienTichHinhTron(banKinh);
// console.log("Diện tích hình tròn có bán kính là: " + banKinh + "cm " + "là" + " " + dienTich);

// function tinhDienTichHinhTron(banKinh) {
//   var dienTich = Math.PI * banKinh * banKinh;
//   return dienTich;
// }

// var banKinh = 5;
// var dienTich = tinhDienTichHinhTron(banKinh);

// console.log("Diện tích hình tròn có bán kính " + banKinh + " là: " + dienTich);

// function chuViHinhTron(r) {
//   const chuVi = 2 * Math.PI * r;
//   return chuVi;
// }
// const r = 2;
// const chuVi = chuViHinhTron(r);
// console.log("Chu vi Hình Tròn có bán kính là 2cm Là " + chuVi);

// chu vi của tam giác p= (a+b+c)/2
// function nuaChuViTamGiac(a,b,c){
//   const chuVi = (a+b+c)/2;
//   return chuVi;
// }
// const a= 2 , b=3,c=5;
// const chuVi=nuaChuViTamGiac(a,b,c);
// console.log("Nua chu vi của tam giác là " + chuVi);

function dienTichTamGiac(a,b,c){
  const p = (a+b+c)/2
  const S = Math.sqrt(p *(p-a)*(p-b)*(p-c));
  return S;
}
const a=4,b=3,c=5;
const S = dienTichTamGiac(a,b,c);
console.log("Diện tích tam giác là:" +S);