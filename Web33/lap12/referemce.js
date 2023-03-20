// let point = { x: 1, y: 2 };
// function calcDistance(p) {
//   p.y = 10;
//   p.z = 15;
// }
// calcDistance(point); //??
// console.log(point);

// let x  = y ={};
// console.log(x == y);
// 1, 2, 3, 4, 5, 6, 7, 8, 9;
// var twoSum = function (nums, target) {
//   let lengthNums = nums.length;
//   var answer = {};
//   let n = 1;
//   for (i = 0; i < lengthNums; i++) {
//     for (j = i + 1; j < lengthNums; j++) {
//       let total = 0;
//       total += nums[i] + target[j];
//       if (total == target) {
//         answer["Cặp sô nghiệm " + n + "là"] = [i, j];
//         n++;
//       }
//     }
//   }
//   return answer;
// };
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 9));

function product(madathang, ngaydathang, danhsachsanpham, tonggiatridondhang) {
  this.ngaydathang = madathang;
  this.ngaydathang = ngaydathang;
  this.danhsachsanpham = danhsachsanpham;
  this.tonggiatridondhang = tonggiatridondhang;
}
const sanpham1 = new product(12, 3, 02, 200);
console.log(sanpham1);
