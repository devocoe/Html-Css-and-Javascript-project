const canvas = document.querySelector("#canvas");
const brushSizeContainer = document.querySelector(".brushSize");
const colorSwatches = document.querySelectorAll(".colorSwatch");
const colorsPalette = document.querySelector(".colorsPalette");
const modeBtn = document.querySelector("#mode-btn");
const ctx = canvas.getContext("2d");

// setting canvas width height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// global variables
let drawing = false;
let brushSize = 5;
let color = "#000";

const startDrawing = (e) => {
  drawing = true;
  draw(e);
};
const endDrawing = () => {
  drawing = false;
  ctx.beginPath();
  ctx.save();
};

const draw = (e) => {
  if (!drawing) return;
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};

function setBrushSize(value) {
  brushSize = value;
}

function clearCanvas() {
  const agree = confirm("Do you realy want to clear");
  if (agree) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mousemove", draw);
colorSwatches.forEach((colorSwatch) => {
  colorSwatch.addEventListener("click", (e) => {
    color = "#" + e.target.id.split("-")[1];
    toggleColorsPalette();
  });
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const toggleColorsPalette = () => {
  colorsPalette.classList.toggle("hide");
};

const toggleBrushSize = () => {
  brushSizeContainer.classList.toggle("hide");
};
const toggleEraser = () => {
  if (document.body.classList.contains("dark")) {
    color = "#111";
  } else {
    color = "#eee";
  }
};
const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
  clearCanvas();
  if (modeBtn.innerHTML == `<i class="fas fa-2x fa-moon"></i>`) {
    modeBtn.innerHTML = `<i class="fas fa-2x fa-sun"></i>`;
    color = "#111";
  } else {
    modeBtn.innerHTML = `<i class="fas fa-2x fa-moon"></i>`;
    color = "#eee";
  }
};
