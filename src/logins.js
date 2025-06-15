// Load users.json into localStorage if not already loaded
if (!localStorage.getItem('users')) {
  fetch('../src/users.json')
    .then(res => res.json())
    .then(users => localStorage.setItem('users', JSON.stringify(users)));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Adjust path if needed
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

function message() {
  alert('Message your admin to create an account.');
}
