document.addEventListener('DOMContentLoaded', function() {
    // Form toggling
    document.querySelectorAll('.toggle-auth').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(target).classList.add('active');
        });
    });

    // Username validation (no numbers allowed)
    function validateUsername(username) {
        return /^[a-zA-Z]+$/.test(username);
    }

    // Email validation (standard format)
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Registration form handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('regUsername').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;

            // Username validation
            if (!username) {
                alert("Username is required!");
                return;
            }
            if (!validateUsername(username)) {
                alert("Username cannot contain numbers!");
                return;
            }

            // Email validation
            if (!email) {
                alert("Email is required!");
                return;
            }
            if (!validateEmail(email)) {
                alert("Please enter a valid email format (example@domain.com)");
                return;
            }

            // Password validation
            if (!password) {
                alert("Password is required!");
                return;
            }

            // Store user data (in real app, send to server)
            localStorage.setItem(email, JSON.stringify({
                username: username,
                email: email,
                password: password
            }));

            alert("Registration successful! You can now login.");
            document.querySelector('.toggle-auth[data-target="loginSection"]').click();
        });
    }

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;

            // Email validation
            if (!email) {
                alert("Email is required!");
                return;
            }
            if (!validateEmail(email)) {
                alert("Please enter a valid email format (example@domain.com)");
                return;
            }

            // Check if user exists
            const userData = JSON.parse(localStorage.getItem(email));
            if (!userData) {
                alert("No account found with this email. Please register.");
                return;
            }

            // Check password
            if (userData.password !== password) {
                alert("Incorrect password!");
                return;
            }

            alert("Login successful! Welcome back, " + userData.username + "!");
            // Redirect to home page or dashboard
            window.location.href = "index.html";
        });
    }
});