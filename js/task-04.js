let counterValue = 0;
const updateCounter = event => {
  if (event.currentTarget.getAttribute('data-action') === 'decrement') {
    counterValue--;
  } else {
    counterValue++;
  }
  document.querySelector('#value').innerHTML = counterValue;
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', updateCounter));
