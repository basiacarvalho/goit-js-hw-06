const validatePassword = event => {
  const password = event.currentTarget.value;
  if (password.length === parseInt(event.currentTarget.getAttribute('data-length'))) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
};

const input = document.querySelector('#validation-input');
input.addEventListener('blur', validatePassword);
