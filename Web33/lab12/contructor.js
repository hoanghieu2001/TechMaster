function SamsungS23Ultra(ram, ssd, color, size) {
  this.ram = ram;
  this.ssd = ssd;
  this.color = color;
  this.size = size;
}
SamsungS23Ultra.prototype.call = function () {
  console.log("calling, ring ring ring");
};
const dienthoai1 = new SamsungS23Ultra(8, 521, 10, "red");
const dienthoai2 = new SamsungS23Ultra(16, 256, "black");
console.log(dienthoai1);

/// Tổng hợp về obj
// tham khảo về setter/property flags
// Prototype
//primitive vs referece
// hàm khởi tạo(clas)
let obj = ["hoang", "Hieu", "hit", 1];
console.log(obj)
