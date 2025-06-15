// Load users from localStorage or fetch from JSON file
async function loadUsers() {
  // Check if users are already in localStorage
  const storedUsers = localStorage.getItem('users');

  if (storedUsers) {
    console.log('Users loaded from localStorage');
    return JSON.parse(storedUsers);
  } else {
    // If not in localStorage, fetch from JSON file
    try {
      const response = await fetch('users.json');
      if (!response.ok) {
        throw new Error('Failed to fetch users.json');
      }
      const usersData = await response.json();

      // Store in localStorage for future use
      localStorage.setItem('users', JSON.stringify(usersData));
      console.log('Users loaded from JSON and stored in localStorage');
      return usersData;
    } catch (error) {
      console.error('Error loading users:', error);
      // Fallback to hardcoded users if JSON file fails to load
      const fallbackUsers = [
        { "username": "MIC-Ayush", "password": "Ayush@123" },
        { "username": "MIC-Unique", "password": "Unique@123" },
        { "username": "MIC-Samjana", "password": "Samjana@123" }
      ];
      localStorage.setItem('users', JSON.stringify(fallbackUsers));
      return fallbackUsers;
    }
  }
}

// Initialize users data
let usersData = [];
document.addEventListener('DOMContentLoaded', async () => {
  usersData = await loadUsers();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember').checked;

  // Check if users data is loaded
  if (usersData.length === 0) {
    alert('Loading user data... Please try again in a moment.');
    return;
  }

  const found = usersData.find(u => u.username === user && u.password === pass);

  if (found) {
    // Store login session information
    if (rememberMe) {
      localStorage.setItem('rememberedUser', user);
      localStorage.setItem('loginSession', JSON.stringify({
        username: user,
        loginTime: new Date().toISOString(),
        rememberMe: true
      }));
    } else {
      // Use sessionStorage for temporary login (cleared when browser closes)
      sessionStorage.setItem('loginSession', JSON.stringify({
        username: user,
        loginTime: new Date().toISOString(),
        rememberMe: false
      }));
      // Remove any previously remembered user
      localStorage.removeItem('rememberedUser');
    }

    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

// Check if user should be remembered and pre-fill username
document.addEventListener('DOMContentLoaded', () => {
  const rememberedUser = localStorage.getItem('rememberedUser');
  if (rememberedUser) {
    document.getElementById('username').value = rememberedUser;
    document.getElementById('remember').checked = true;
  }
});

// Function to check if user is logged in (useful for other pages)
function isLoggedIn() {
  const sessionData = localStorage.getItem('loginSession') || sessionStorage.getItem('loginSession');
  return sessionData !== null;
}

// Function to get current logged-in user (useful for other pages)
function getCurrentUser() {
  const sessionData = localStorage.getItem('loginSession') || sessionStorage.getItem('loginSession');
  if (sessionData) {
    return JSON.parse(sessionData);
  }
  return null;
}

// Function to logout (clears session data)
function logout() {
  localStorage.removeItem('loginSession');
  sessionStorage.removeItem('loginSession');
  // Optionally keep or remove remembered username
  // localStorage.removeItem('rememberedUser'); // Uncomment to forget username too
  window.location.href = 'login.html';
}

function message() {
  alert('Message your admin to create an account.');
}
