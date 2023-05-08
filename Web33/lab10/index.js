// // 1 + null = 1
// // 1 + undefined = NaN

// // Gán kết hợp với toán tử số học
// // x +=1 ;//x = x+1 ->2
// // x/ =2;// y/2->3
// //  let a =1;
// //  console.log(a++ + a++);
// //  console.log(a);
// //  let b =1;
// //  console.log(++b+ ++b);
// //  console.log(b);

// // let a =1, b=(a%2)*2,c=a++ - b--,d="0";
// // console.log(a+b+c+d);
// // console.log(a-b+c-d);
// // console.log(a-- +(b-- *c)/d);
// // // console.log(++a - +b *c )

// // a=1
// // b=1
// // c=0 +2
// // d="-0"

// true || false; //true
// 0|| 1;//1
// 0||false||""; //""

// "abc"|| "xyz"; //abc

// true && false; //false
// 0&& 1;//0
// 0&& false &&""; //0
// "abc"&&

// !"";//true
// !"234";//false

// a=true;
// // Chạy 1 câu lệnh
// a&& console.log("Hello")
// // Gắn 1 giá trị mặc định
// b= undefined;
// let c =b||10;
// console.log(c);
// function greeting(name){

// }
// greeting("Hieu"); //name = Hieu
// greeting(); // name = undefined

// (user||{}).map()

// Cấu trúc điều khiển

// rẽ nhánh (điều kiện)
// if else
// switch catch
//try catch
// Biểu thức điều kiện ? (toán tử 3 ngôi)

// Vòng lặp

// Chạy khối lệnh theo điều kiện
// // Diều kiện có thẻ là 1 giá trị, 1 biểu thức so sánh
// // Hoặc là biểu thức logic đánh giá nhiều điều kiện
// // if(dieu_kien){
// //     code
// // }

// let name ="Hieu"
// if(name=="Hieu"){
//     console.log("Chào Hiệu đẹp trai");
// }

// // Chạy 1 trong 2 khối lệnh theo điều kiện
// // if(dieu_kien){
// //     code
// // }else{
// //     code
// // }
// if(name =="Hieu"){
//     console.log("Chào anh Hiệu đẹp trai")
// }else{
//     console.log(`chào anh $(name) xấu trai`)
// }
// /// chạy 1 trong các khối lệnh điều kiện khác nhau
// // Kiểm tra nhiều điều kiện
// // thứ tự kiểm tra điều kiện rất quan trọng
//     // if(dieu_kien){
//     //     code_1
//     // }else if(dieu_kien2){
//     //     code_2
//     // }else if(dieu_kien3){
//     //     code_3
//     // }else{
//     //     code_4
//     // }

// let weekday = 6;
// if(weekday==2){
//     console.log("Hom nay là thứ 2")
// }else if(weekday ==3){
//     console.log("Hôm nay là thứ 3")
// }else if(weekday==4){
//     console.log("Hôm nay là thứ 4")
// }else if(weekday==5){
//     console.log("Hôm nay là thứ 5")
// }else if(weekday==6){
//     console.log("Hôm nay là thứ 6")
// }else if(weekday ==7){
//     console.log("Hôm nay là thứ 7")
// }else{
//     console.log("Hôm nay là chủ nhật")
// }

// // if else lồng nhau
// if(dieu_kien){
//     if(dieu_kien_1){

//     }else{

//     }
// }
// if(dieu_kien_1&&dieu_kien_2){

// }else if(dieu_kien_1){

// }else{

// }

// let isWeekend =true;
// let haveGirlFriend =false;

// if(isWeekend && haveGirlFriend){
//     console.log("thì rủ bạn gái đi đá phò")
// }else if(isWeekend){
//     console.log("Di mua khăn giấy")
// }else{
//     console.log("Code")
// }

// Bài 1
// const mark = 80;
// function checkMark(mark) {
//   if (mark >= 85) {
//     console.log("A");
//   }else if (70 <= mark && mark < 85) {
//     console.log("B");
//   } else if (40 <= mark && mark < 70) {
//     console.log("C");
//   } else {
//     console.log("D");
//   }
// //   const mark = checkMark(mark);
//   return mark;
// }
// console.log(checkMark(mark));

// bài 2
// function box(a,b){
//     if(a>b){
//         console.log("a lớn hơn b")
//     }else if(a<b){
//         console.log("a nhỏ hơn b")
//     }else{
//         console.log("sai")
//     }

// }
// const a =3,b=7;
// console.log(box(a,b));

// bài 3
function box1(a) {
  if (a > 0) {
    console.log("a là số dương");
  } else if ((a = 0)) {
    console.log("a = 0");
  } else if (a < 0) {
    console.log("a là số âm");
  }
}
const a = 4;
console.log(box1(a));
// bài 4
function chiaHet(a) {
  if ((a %= 2 === 0)) {
    console.log("số đó là số chẵn ");
  } else {
    console.log("Số đó là số lẻ");
  }
}
console.log(chiaHet(a));
// bài 5
function box2(a) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("Chia hết cho 3 và 5");
  } else {
    console.log("Số đó không chia hết cho 3 và 5");
  }
}
console.log(box2(a));
// Bài 6
function sum(a, b, c) {
  if (a + b == c) {
    console.log(" C bằng a+b");
  } else {
    console.log("C không bằng a+b");
  }
}
const b = 3,
  c = 7;
console.log(sum(a, b, c));
