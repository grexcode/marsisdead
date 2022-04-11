
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (password === "sofia") {
        alert("You have successfully logged in.");
        location.href = "https://grexcode.github.io/marsisdead/personalcomputer/desktop.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
