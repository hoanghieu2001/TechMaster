// // console.log("Hello");
// console.log(document);
// // const h1 = document.querySelector("h1");
// // console.log(h1);
// console.log(document.childNode);
// const html = document.childNodes[1];
// console.log(html);
// console.log(html.childNodes);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);

// const h1 = document.querySelector("body > h1");
// console.log(h1.nodeName);
// console.log(h1.nodeType);
// console.log(h1.nextSibling);
// console.log(h1.textContent);
// h1.textContent = "Goodbye JavaScript";
// // document.title = "Hello JavaScript";
// // const p = document.querySelectorAll("p");
// // console.log(p);
// // // document.body.querySelector("");
// // // h1.querySelector();

// // const div = p[0].closest(".paragraph");
// // console.log(div);
// console.log(h1.attributes);
// console.log(h1.id);
// console.log(h1.className);

// h1.className = "heading heading--big";
// console.log(h1.clientWidth);
// console.log(h1.clientHeight);
// console.log(h1.clientTop);
// console.log(h1.clientLeft);

const div = document.querySelector("inner__html");

div.innerHTML = `
<img src= "" alt = Anh đại diện/>
<h2> Tiêu đề bài viết</h2>
<p> Nội dung tóm tắt bài viết</p>`;

document.body.innerHTML = html` <div>
  <h1>Hello JavaScript</h1>
</div>`;
