const submitForm = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('Please fill in all the fields!');
  }

  const formValues = {
    email: email.value,
    password: password.value,
  };

  console.log(`Form values: ${email.value}, ${password.value}`);
  event.currentTarget.reset();
};

const form = document.querySelector('.login-form');
form.addEventListener('submit', submitForm);
