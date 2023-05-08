// Call back
let arr = [1, 2, 3, 4, 5];
function square(n) {
  const result = n * n;
  console.log(result);
}

for (let n of arr) {
  square(n);
}
arr.forEach(function (a, b) {
  return a * b;
});
console.log(arr);

let hit = [3, 2, 5, 2, 34, 4];
hit.sort((a, b) => b - a);
console.log(hit);

let users = [
  { name: "Hiệu", age: 12 },
  {
    name: "Tú",
    age: 18,
  },
  { name: "Quang", age: 20 },
];
let user = users.find((Element) => Element.age == 18);
console.log(user);
users.sort(function (a, b) {
  return a.age - b.age;
});
console.log(users);

// findInDex là một phương thức được cung cấp trong mảng( Array)
// Để tìm kiếm giá trị đầu tiên có thỏa mãn điều kiện để trả về giá trị True
// trong đó callback là một hàm được gọi với các tham số sau:
// element: phần tử đang được xử lý trong mảng.
// index (tùy chọn): chỉ số của phần tử đang được xử lý trong mảng.
// array (tùy chọn): mảng đang được xử lý.
// Hàm này trả về true nếu điều kiện tìm kiếm được thỏa mãn và false nếu không.
// thisArg (tùy chọn): giá trị được sử dụng làm this trong hàm callback.
// Phương thức findIndex() trả về chỉ số đầu tiên của phần tử thỏa mãn điều kiện trong mảng.
// Nếu không tìm thấy phần tử nào thỏa mãn điều kiện, phương thức sẽ trả về -1.
let numbers = [1, 3, 4, 5, 3];
let number = numbers.findIndex((Element, i) => {
  return Element % 3 === 0 && i % 3 === 0;
});
console.log(number);

// Reduce : Để tính toàn 1 giá trị duy nhất dựa trên tất cả các phần tử trong mảng
// Phương thức này có thẻ tính tổng hoặc tích của các phần tử trong mảng hoặc để biến đổi giá trị khác
// chẳng hạn một đối tượng mới hoặc 1 mảng mới

// Trong đó:

// callback là một hàm được gọi với các tham số sau:
// accumulator: giá trị tích lũy từ các phần tử trước đó.
// currentValue: giá trị của phần tử hiện tại đang được xử lý.
// currentIndex (tùy chọn): chỉ số của phần tử hiện tại đang được xử lý trong mảng.
// array (tùy chọn): mảng đang được xử lý.
// Hàm này trả về giá trị tích lũy mới, được tính dựa trên giá trị tích lũy hiện tại và giá trị của phần tử hiện tại.
// initialValue (tùy chọn): giá trị ban đầu của biến tích lũy (accumulator). Nếu không cung cấp giá trị ban đầu, giá trị đầu tiên trong mảng sẽ được sử dụng làm giá trị ban đầu của accumulator, và vòng lặp sẽ bắt đầu từ phần tử thứ hai.
// Phương thức reduce() trả về giá trị tích lũy cuối cùng sau khi xử lý tất cả các phần tử trong mảng.
let n = numbers.reduce((i, u) => {
  return i + u;
}, 0);
console.log(n);

// some : là 1 phương thức kiểm tra xem có tí nhất 1 phần thử trong mảng thỏa mãn điều kiện được xác định bỏi 1 hàm là trả về true hay không
const some = numbers.some((Element) => {
  return Element % 2 === 0;
});
console.log(some);

// very là kiểm tra tất cả các phần tử trong mảng có thỏa mãn các điều kiện hay không
const e = [2, 4, 6];
const very = e.every((Element) => {
  return Element % 2 === 0;
});
console.log(very);

let y = [1, 2, 3, 4, 6, 8, 20, 10, 10, 20];
// function square(y) {
//   // const result = y * y;
//   return (m = y * y);
// }
// console.log(m);
// for (let value of y) {
//   square(value);
// }
// y.forEach(square);
// console.log(square);

//filter : là tạo ra 1 mảng mới và nhập lại các giá trị thỏa mãn điều kiện
const evenNumbers = y.filter((i) => {
  return i % 2 === 0;
});
console.log(evenNumbers);

// let removeKey = [
//   { name: "Ba", age: 31 },
//   { name: "Mai Anh", age: 30 },
// ];
// function removeKey(arr, key) {
//   const newArr = [...arr];
//   newArr.forEach((value) => delete value[key]);
//   return newArr;
// }
// console.log(
//   removeKey([
//     { name: "Ba", age: 31 },
//     { name: "Mai Anh", age: 30 },
//   ])
// );
// arr.forEach(function (n) {
//   console.log(n * 9);
// });
