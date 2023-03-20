// Mô tả một đối tượng chó
let dog = {
  // key: value
  // Trạng thái - Thuộc tính
  name: "Ben",
  age: 2,
  breed: "Pitbull",
  weight: 3,
  color: "Yellow",
  eye: {
    color: "black",
  },

  // Hành vi - Phương thức
  bark() {
    console.log("Go go go go");
  },
  run() {
    // Biến đặc biệt this
    // this đại diện cho đối tượng hiện tại (đối tượng gọi phương thức)
    // Sử dụng this để truy cập đến các thuộc tính/phương thức khác của đối tượng
    console.log(this.name, "is running");

    this.bite();
    this.bark();

    this.weight = 5;
  },
  bite() {
    console.log("Ẳng ẳng");
  },
};

console.log(dog);

// Cú pháp để truy cập giá trị (thuộc tính, phương thức) bên trong đối tượng

// Dot Notation - Sử dụng dấu chấm
console.log(dog.name);

console.log(dog.eye.color);

dog.bark();
dog.run();
dog.bite();

// Bracket Notation - Sử dụng ngoặc vuông
console.log(dog["name"]);
dog["run"]();

// Cập nhật/thay đổi giá trị thuộc tính
dog.name = "Béo";

// Thêm một thuộc tính/phương thức
dog.height = 60;
dog.eat = function () {
  console.log("Éc éc éc");
};

// Xóa thuộc tính/phương thức
delete dog.eye;

// Kiểm tra một thuộc tính (key) có trong đối tượng hay không
console.log("breed" in dog);
console.log("eye" in dog);

// Duyệt qua các thuộc tính
for (let key in dog) {
  console.log("Key:", key, "Value:", dog[key]);
}

let items = {
  // key là tên sản phẩm
  // value là giá sản phẩm
  iphone: 1000,
  macbook: 2000,
  clothes: 10,
};

// Tính tổng giá trị tất cả các items
let total = 0;

for (let product in items) {
  const price = items[product];

  total += price;
}

console.log(total);

let students = {
  // key là tên học viên
  // value là quê quán
  Ba: "Nam Định",
  Sơn: "Đông Anh, Hà Nội",
  Quang: "Hải Phòng",
  Hiệu: "Thái Bình",
  Hiếu: "Thái Bình",
};

function greeting(name) {
  // Kiểm tra xem tên có trong danh sách hay không
  // In ra câu chào dạng "Xin chào, mình là Ba, mình đến từ Nam Định"
  // Nếu không có, in ra "Xin chào, mình là Béo, mình là người mới"
  if (name in students) {
    let from = students[name];

    console.log(`Xin chào, mình là ${name}, mình đến từ ${from}`);
  } else {
    console.log(`Xin chào, mình là ${name}, mình là người mới`);
  }
}

greeting("Ba");
greeting("Tuấn");
