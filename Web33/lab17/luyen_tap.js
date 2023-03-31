const idheadingElement = document.querySelector("#heading");
idheadingElement.style.color = "red";
idheadingElement.style.textTransform = "uppercase";

// const paraAll = document.querySelectorAll(".para");
// paraAll.style.color = "blue";
// paraAll.style.fontsize = "20px";
const paraCollection = document.querySelectorAll(".para");
paraCollection.forEach(function (paraElement) {
  paraElement.classList.add("text-blue", "font-large");
});
const para3 = document.querySelector(".para-3");
const link = document.createElement("a");
link.href = "https://www.facebook.com/HoangVanHieu0812/";
link.textContent = "Link face";
para3.appendChild(link);

// const para = document.createElement("p");
// para.innerText = <a src="https://www.facebook.com/HoangVanHieu0812/"></a>;
// document.para3.prepend(para);

const title = document.querySelector("#title");
document.title = "Đây là tiêu đề";

const description = document.querySelector(".description");
description.classList.add(".text-bold");

const button = document.createElement("button");
button.textContent = "click me";
para3.parentNode.replaceChild(button, para3);

// chọn ra các phần tử có class là para-2
const para2 = document.querySelector(".para-2");
const clonePara2 = para2.cloneNode(true);
para2.parentNode.insertBefore(clonePara2, para2.nextElementSibling);

const para1 = document.querySelector(".para-1");
para1.parentNode.removeChild(para1);
