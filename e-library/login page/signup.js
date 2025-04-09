// // Select the signup form
// const signupForm = document.getElementById('signupForm');

// // Add event listener for form submission
// signupForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get input values
//     const newUsername = document.getElementById('newUsername').value.trim();
//     const newPassword = document.getElementById('newPassword').value.trim();

//     // Simple validation
//     if (!newUsername || !newPassword) {
//         alert('Please fill in both fields!');
//         return;
//     }

//     // Store user credentials in localStorage
//     localStorage.setItem('username', newUsername);
//     localStorage.setItem('password', newPassword);

//     // Notify user and redirect to login page
//     alert('Signup successful! You can now log in.');
//     window.location.href = "login.html"; // Redirect to the login page
// });
