const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

size = [10000, 10000];
canvas.width = size[0];
canvas.height = size[1];

ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, size[0], size[1]);
ctx.fillStyle = '#000000';

function drawBol(x, y, radius, color) {
  ctx.beginPath()
  ctx.fillStyle = '#ffffff'
  ctx.strokeStyle = color;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke()
  ctx.closePath()
}

for (let index = 0; index < 1000; index++) {
  drawBol(index * 10 + 50, 100 + index, 4 + index, '#ff0000');
}


const drawPooPoo = (x, y, length, size, color, name) => {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.arc(x + size, y + size, size, 0, 2 * Math.PI);
  ctx.arc(x - size, y + size, size, 0, 2 * Math.PI);
  ctx.fill()

  ctx.lineWidth = size * 2;
  ctx.lineCap = 'round';

  ctx.moveTo(x, y);
  ctx.lineTo(x, y - length);
  ctx.stroke()
  ctx.closePath();
  ctx.fillText(name, x, y + size + 200);
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  drawPooPoo(x, y, 100, 30, '#00AAf8', 'BOLLE');
});

for (let index = 0; index < 100; index++) {
  let color = (index * 0xa000000).toString(16);
  if (color.length > 6) color = color.substr(0,6);

  drawPooPoo(900 + index * 200, 9000, 8700, 70, `#${color}`, 'gunnar');

}


const form     = document.getElementById("PeePeeform")
const ppNavn   = document.getElementById("navn");
const ppLengde = document.getElementById("lengde");
const ppBredde = document.getElementById("bredde");
const ppX      = document.getElementById("peepx");
const ppY      = document.getElementById("peepy");


form.onsubmit = (event) => {
  event.preventDefault();
  const x      = parseInt(ppX.value);
  const y      = parseInt(ppY.value);
  const length = parseInt(ppLengde.value);
  const width  = parseInt(ppBredde.value);
  drawPooPoo(x, y, length, width, '#fff000', ppNavn.value);
}

function drawpeepee(x, y, length, width) {

  ctx.beginPath()
  ctx.moveTo(x, y + width);
  ctx.lineTo(x, y + width + length);
  ctx.stroke();
  ctx.moveTo(x + width, y + width);
  ctx.lineTo(x + width, y + width + length);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + width / 2, y + width, width / 2, Math.PI, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y + width + length, width / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + width, y + width + length, width / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath()

}

ctx.font = "80px Arial";
ctx.fillText("Gunnar er en tissemann", 100, 500);

drawpeepee(500, 10, 500, 50);