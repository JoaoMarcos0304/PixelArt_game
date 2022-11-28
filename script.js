const quadroPixels = document.getElementById('quadroPixels');
const corInicial = document.getElementById('corInicial');
const cores = document.querySelectorAll('.color');
const clearBtn = document.querySelector('#clearBtn');
const pixels = quadroPixels.children;
let allColors = document.getElementById('paletaDeCores').children;

function createPixels(tamanho) {
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    quadroPixels.appendChild(pixel)
  }
};

function quadroPixelsSize(tamanho) {
  const size = tamanho * 40 * 10;
  quadroPixels.style.width = `${size}px`;
  quadroPixels.style.height = `${size}px`;
};

function selectCorInicial() {
  corInicial.classList.add('selected');
};

function paintPixels({ target }) {
  const colorSelected = getComputedStyle(document.querySelector('.selected'));
  const color = colorSelected.getPropertyValue('background-color');

  target.style.backgroundColor = color;
};

function selectColor(event) {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
};

function setColors() {
  for (let id = 0; id < cores.length; id += 1) {
    const a = Math.random() * 255;
    const b = Math.random() * 255;
    const c = Math.random() * 255;
    
    cores[id].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  }
};

function clear() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
};

createPixels(10);
window.onload = () => {
  // quadroPixelsSize(5);
  for (let i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener('click', selectColor);
  }
  for (let id = 0; id < pixels.length; id += 1) {
    pixels[id].addEventListener('click', paintPixels);
  }
  selectCorInicial();
  setColors();
  clearBtn.addEventListener('click', clear);
}