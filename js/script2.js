// Script example

const loginBtn = document.querySelector('.btn-primary');
const registerBtn = document.querySelector('.btn-secondary');

loginBtn.addEventListener('click', () => {
  // Redirect to login page
  window.location.href = 'login.html';
});

registerBtn.addEventListener('click', () => {
  // Redirect to register page
  window.location.href = 'register.html';
});
