function saveReview(){
  let username = document.querySelector('#username').value;
  let showname = document.querySelector('#showname').value;
  let seat = document.querySelector('#seat').value;
  let star = document.querySelector('#star').value;
  let review_image = document.querySelector('#review_image').value;
  let review_text = document.querySelector('#review_text').value;

  localStorage.setItem('username', username);
  localStorage.setItem('showname', showname);
  localStorage.setItem('seat', seat);
  localStorage.setItem('star', parseFloat(star)/2);
  localStorage.setItem('review_image', review_image);
  localStorage.setItem('review_text', review_text);
}

// 리뷰 별 그리기
const drawStar = (target) => {
  target.parentNode.querySelector('span').style.width = `${target.value * 10}%`;
}

// 사진 드래그앤드롭
var input = document.getElementById("input");
var initLabel = document.getElementById("label");

input.addEventListener("change", (event) => {
  const files = changeEvent(event);
  handleUpdate(files);
});

function changeEvent(event){
  const { target } = event;
  return [...target.files];
};

function handleUpdate(fileList){
  const previewBox = document.querySelector(".preview-container");
  const preview = document.getElementById("preview");
  previewBox.style.display = "block";
  previewBox.style.marginTop = "10px";
  fileList.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const img = el("img", {
        className: "embed-img",
        src: event.target?.result,
      });
      const imgContainer = el("div", { className: "container-img" }, img);
      preview.append(imgContainer);
    });
    reader.readAsDataURL(file);
  });
};

function el(nodeName, attributes, ...children) {
  const node =
    nodeName === "fragment"
      ? document.createDocumentFragment()
      : document.createElement(nodeName);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "events") {
      Object.entries(value).forEach(([type, listener]) => {
        node.addEventListener(type, listener);
      });
    } else if (key in node) {
      try {
        node[key] = value;
      } catch (err) {
        node.setAttribute(key, value);
      }
    } else {
      node.setAttribute(key, value);
    }
  });

  children.forEach((childNode) => {
    if (typeof childNode === "string") {
      node.appendChild(document.createTextNode(childNode));
    } else {
      node.appendChild(childNode);
    }
  });

  return node;
}