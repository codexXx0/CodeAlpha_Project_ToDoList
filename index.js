
// Signup Functionality
document.getElementById('signup').addEventListener('click', function (event) {
    event.preventDefault();
    let name = document.getElementById('signUpName').value;
    let email = document.getElementById('signUpEmail').value;
    let password = document.getElementById('signUpPass').value;
    
    if (name && email && password) {
        // Get existing users from localStorage or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if the email already exists
        let userExists = users.some(user => user.email === email);

        if (!userExists) {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            swal("Sign up successful!", "Redirecting to login...", "success");
            setTimeout(() => {
                window.location.reload(); // Reloads the page to show the login form
            }, 2500);
        } else {
            swal("Watch Out!", "An account with this email already exists.", "error");
        }
    } else {
        swal("Watch Out!", "Please fill in all fields.", "error");
    }
});

// Login Functionality
document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPass').value;

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find a user with matching email and password
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        swal("Login successful!", `Welcome back ${user.name}`, "success");
        setTimeout(() => {
            window.location.href = 'html/StickyWall.html'; // Redirect to another page
        }, 2500);
    } else {
        swal("Watch Out!", "Invalid email or password.", "error");
    }
});

document.getElementById("goSignUp").onclick = function() {
    document.getElementById('signup').classList.remove("hide")
    document.getElementById('login').classList.add("hide")
    
    // event.preventDefault();
}