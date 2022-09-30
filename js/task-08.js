const loginFormRef = document.querySelector('.login-form');
loginFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All fields must be full!');
    return;
  }

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //       console.log(`name:`, name, `, value:`, value);
  //   });

  const formData = {
    formEmail: email.value,
    formPassword: password.value,
  };

  console.log(formData);

  event.currentTarget.reset();
}
