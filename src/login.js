document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting and reloading the page

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Check credentials (replace with your actual username and password)
  if (user === 'MIC-Ayush' && pass === 'Password@123') {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

function message(){
  alert('Message your admin to create an account.');
}
