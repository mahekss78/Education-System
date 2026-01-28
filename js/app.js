// ===== LOGIN / LOGOUT SYSTEM =====

// Hardcoded test user
const testUser = { username: "testuser", password: "1234" };

// Check login status
function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Login function
function login(username, password) {
  if (username === testUser.username && password === testUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    loadPage('pages/dashboard.html'); // redirect to dashboard after login
    return true;
  } else {
    alert("Invalid username or password!");
    return false;
  }
}

// Logout function
function logout() {
  // clear login state
  localStorage.removeItem("isLoggedIn");

  // redirect to login/home page
  window.location.href = "home.html";
}


// Wrapper to protect pages
function requireLogin(page) {
  if (isLoggedIn()) {
    loadPage(page);
  } else {
    showLoginForm();
  }
}

// Show login form inside SPA
function showLoginForm() {
  document.getElementById("content").innerHTML = `
    <h2>Login</h2>
    <form onsubmit="handleLogin(event)">
      <input type="text" id="loginUsername" placeholder="Username" required><br><br>
      <input type="password" id="loginPassword" placeholder="Password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `;
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  login(username, password);
}

// Optional: auto-load dashboard if logged in
if (isLoggedIn()) {
  loadPage('pages/dashboard.html', document.querySelector('.menu a.active'));
} else {
  showLoginForm();
}
