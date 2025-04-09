// Select the login form
const loginForm = document.getElementById('loginForm');

// Add an event listener for form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (!username || !password) {
        alert('Please fill in both fields!');
        return;
    }

    // Get stored user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Simulate login process by checking stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Welcome back, ' + username + '!');
        // Redirect to another page (optional)
        window.location.href = "../main page/main1.html"; // Replace with your desired URL
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
