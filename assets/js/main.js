const mainElement = document.querySelector('#main');
const formElement = document.querySelector('#subscribe-form');
const confirmationEmailElement = document.querySelector('.confirmation-email');

const emailInput = document.querySelector('#email-address');
const dismissButton = document.querySelector('#dismiss-btn');

formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value;

  if (validateEmail(email)) {
    displaySuccessMessage(email);
  } else {
    displayError();
  }
}

function validateEmail(email) {
  const validRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return validRegex.test(email);
}

function displayError() {
  formElement.classList.add('error');
}

function displaySuccessMessage(email) {
  confirmationEmailElement.innerText = email;
  mainElement.classList.add('active');
  formElement.classList.remove('error');
  dismissButton.addEventListener('click', dismissSuccessMessage);
  document.addEventListener('keydown', handleKeyDown);
}

function dismissSuccessMessage() {
  mainElement.classList.remove('active');
  emailInput.value = '';
  dismissButton.removeEventListener('click', dismissSuccessMessage);
  document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  if (event.code === 'Escape') {
    dismissSuccessMessage();
  }
}
