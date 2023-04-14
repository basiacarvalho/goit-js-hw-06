function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let size = 30;

function createBoxes(amount) {
  const divItems = [];

  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.width = `${size}px`;
    divItem.style.height = `${size}px`;
    divItems.push(divItem);
    size += 10;
  }

  const boxes = document.querySelector('#boxes');
  boxes.append(...divItems);
}

function destroyBoxes() {
  size = 30;
  const boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
}

const handleBoxesAction = event => {
  if (event.currentTarget.hasAttribute('data-create')) {
    createBoxes(document.querySelector('input').value);
  } else {
    destroyBoxes();
  }
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleBoxesAction));
