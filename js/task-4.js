
const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = form.elements.password.value.trim();
    const email = form.elements.email.value.trim();

    if (!email || !password) {
     return alert('All form fields must be filled in');
    }

    const formData = {
      email,
      password
    };

    console.log(formData);
    form.reset(); 
  });


