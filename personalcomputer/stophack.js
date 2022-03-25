
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "SPACE") {
        alert("You have successfully logged in.");
        location.href = "https://grexcode.github.io/marsisdead/personalcomputer/endgame.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
