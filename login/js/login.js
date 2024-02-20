var emailInput = document.getElementById("login_username");
var passwordInput = document.getElementById("login_password");
var emailMessage = document.getElementById("emailMessage");
var passwordMessage = document.getElementById("passwordMessage");

function show1() {
    if (emailInput.value === "") {
        emailMessage.style.display = "block";
    } else {
        emailMessage.style.display = "none";
    }
}

function show2() {
    if (passwordInput.value === "") {
        passwordMessage.style.display = "block";
    } else {
        passwordMessage.style.display = "none";
    }
}



const loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;


    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');


    if (username === storedUsername && password === storedPassword) {

        window.location.href = '../index.html';
    } 
});

