document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Send login request to server
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.ok) {
        console.log('Login successful!');
        // Perform actions after successful login (e.g., redirect)
      } else {
        console.error('Login failed:', response.statusText);
        // Handle login failure (e.g., display error message)
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      // Handle network errors or other issues
    });
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    // Send signup request to server
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
    .then(response => {
      if (response.ok) {
        console.log('Signup successful!');
        // Perform actions after successful signup (e.g., display success message)
      } else {
        console.error('Signup failed:', response.statusText);
        // Handle signup failure (e.g., display error message)
      }
    })
    .catch(error => {
      console.error('Error signing up:', error);
      // Handle network errors or other issues
    });
  });
});
