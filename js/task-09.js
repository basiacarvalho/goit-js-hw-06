function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor(event) {
  const color = getRandomHexColor();

  document.querySelector('.color').innerHTML = color;
  document.querySelector('body').style.backgroundColor = color;
}

const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', changeBackgroundColor);
