const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (!nameInput.value.trim()) {
    isValid = false;
    nameInput.classList.add('is-invalid');
  } else {
    nameInput.classList.remove('is-invalid');
  }

  if (!surnameInput.value.trim()) {
    isValid = false;
    surnameInput.classList.add('is-invalid');
  } else {
    surnameInput.classList.remove('is-invalid');
  }

  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }

  if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
    isValid = false;
    phoneInput.classList.add('is-invalid');
  } else {
    phoneInput.classList.remove('is-invalid');
  }

  if (!messageInput.value.trim()) {
    isValid = false;
    messageInput.classList.add('is-invalid');
  } else {
    messageInput.classList.remove('is-invalid');
  }

  if (isValid) {
    sendFormData();
  }
});

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isValidPhone(phone) {
  return /^\+?\d{1,3}?[-\s]?\(?\d{1,3}\)?[-\s]?\d{3,4}[-\s]?\d{4}$/.test(phone);
}

function sendFormData() {
  const formData = new FormData(form);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Форма успешно отправлена:', data);
  })
  .catch(error => {
    console.error('Ошибка при отправке формы:', error);
  });
}