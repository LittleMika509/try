// Обробка натискання на Login/Register кнопку
document.getElementById('auth-button').addEventListener('click', () => {
  const choice = confirm("Do you want to Login? Click 'Cancel' for Register.");
  if (choice) {
    alert("Redirecting to Login page...");
    // Тут можна додати реальне перенаправлення, наприклад:
    // window.location.href = '/login';
  } else {
    alert("Redirecting to Register page...");
    // Тут можна додати реальне перенаправлення, наприклад:
    // window.location.href = '/register';
  }
});
