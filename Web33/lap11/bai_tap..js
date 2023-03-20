let myArray = ["Hiệu", "Hit", "Hoàng"];
let hit = myArray.length;
for (let i = 0; i < hit; i++) {
  console.log(myArray[i]);
}

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
function sum(x) {
  let total = 0;
  for (i in orders) {
    const price = x[i].price;
    total += x[i].price;
  }
  return total;
}
console.log(sum(orders));
// function getTotal() {
//   let giaTien = orders.length;
//   for (let i = 0; i < giaTien; i++) {
//     // giatien += orders[i].price;
//     console.log(orders[i]);
//   }
// // }
// var giatien = 0;

// // let giaTien = orders.length;
// for (let i in orders) {
//   giaTien += orders[i].price;
// }

// console.log(giatien);
// var total = 0;
// for (let i in orders) {
//   total += orders[i].price;
// }
// console.log(total);
// let total = 0;

// for (let product in items) {
//   const price = items[product];

//   total += price;
// }

// console.log(total);

// let items = {
//   //key là tên sản phẩm
//   //value là giá sản phẩm
//   iphone: 1000,
//   macbook: 2000,
//   clothes: 10,
// };
// /// tính tổng
// total = 0;
// var sum = 0;
// for (let i in items) {
//   const price = items[i];
//   sum += items[i];
// }
// console.log(sum);

// for (let product in items) {
//   const price = items[product];
//   total += price;
// }
// console.log(total);
