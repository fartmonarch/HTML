// domLearn.js

const captions = [
  "红狗 - 灌伤这一块",
  "白面 - 反三这一块",
  "纲手 - 回合这一块",
  "新南 - 阴间这一块",
];

const textContainer = document.querySelector(".text-container");
const carousel = document.querySelector(".image");
const items = Array.from(carousel.querySelectorAll("img"));
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let i = 0;
let autoTimer;

// 更新显示
function updateDisplay() {
  items.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
  });
  textContainer.querySelector(".caption").textContent = captions[i];
}

// 下一张
nextBtn.addEventListener("click", () => {
  i = (i + 1) % items.length;
  updateDisplay();
});

// 上一张
prevBtn.addEventListener("click", () => {
  i = (i - 1 + items.length) % items.length;
  updateDisplay();
});

// 自动轮播：始终循环
autoTimer = setInterval(() => {
  i = (i + 1) % items.length;
  updateDisplay();
}, 4000);

// 初始化
updateDisplay();
