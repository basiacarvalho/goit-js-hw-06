document.querySelector('#name-input').addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    document.querySelector('#name-output').innerHTML = 'Anonymous';
  } else {
    document.querySelector('#name-output').innerHTML = event.currentTarget.value;
  }
});
