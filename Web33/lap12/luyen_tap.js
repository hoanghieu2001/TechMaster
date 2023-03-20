function cat(height, weight, color) {
  this.height = height;
  this.weight = weight;
  this.color = color;
}
const cat1 = new cat(20, 3, "black");
console.log(cat1);

let product = [
  {
    name: "book",
    price: 5000,
  },
  {
    name: "pen",
    price: 3000,
  },
  { name: "ruler", price: 2000 },
];

// let total = 0;
// for (i in product) {
//   const price = product[i].price;
//   total += product[i].price;
// }
// console.log(total);

function sum(x) {
  let total = 0;
  for (i in product) {
    const price = x[i].price;
    total += x[i].price;
  }
  return total;
}
console.log(sum(product));
