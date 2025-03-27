// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('collegeEmail');
            const email = emailInput.value.trim();
            
            // Validate email format and check domain
            if (validateCollegeEmail(email)) {
                // Redirect to notes page if validation passes
                window.location.href = 'notes.html';
            } else {
                alert('Please enter a valid college email address (e.g., @college.edu)');
                emailInput.focus();
            }
        });
    }
    
    function validateCollegeEmail(email) {
        // Regular expression to validate email format and check for college domain
        const emailRegex = /^[a-zA-Z0-9._-]+@college\.edu$/;
        return emailRegex.test(email);
    }
});