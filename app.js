const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

const stopPainting = () => {
  painting = false;
}

const startPainting = () => {
  painting = true;
}

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

const handleColorClick = (e) => {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))