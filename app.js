const errorBox = document.querySelector('.errors');
const emailInput = document.querySelector('input[name="email"]');
const confirmEmailInput = document.querySelector('input[name="confirm-email"]');

function validateEmail() {
  if (emailInput.value !== confirmEmailInput.value) {
    errorBox.textContent = '* Email addresses must match';
    errorBox.style.color = 'red';
  } else {
    errorBox.textContent = '';
  }
}

// emailInput.addEventListener('input', validateEmail);
confirmEmailInput.addEventListener('input', validateEmail);
