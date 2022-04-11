
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "SOFIA") {
        alert("You have successfully logged in.");
        location.href = "https://grexcode.github.io/marsisdead/commandcenter/success.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

 function JavaBlink() {
     var blinks = document.getElementsByTagName('JavaBlink');
     for (var i = blinks.length - 1; i >= 0; i--) {
        var s = blinks[i];
        s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
     }
     window.setTimeout(JavaBlink, 800);
  }
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", JavaBlink, false);
  else if (window.addEventListener) window.addEventListener("load", JavaBlink, false);
  else if (window.attachEvent) window.attachEvent("onload", JavaBlink);
  else window.onload = JavaBlink;
