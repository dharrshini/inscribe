if (localStorage.getItem("isLoggedIn") === "true") {  //login status check 
  window.location.href = "inscribe.html";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;         //email definition
  const password = document.getElementById("password").value;    //password definition

  if (email === "email@email.id" && password === "password") {   //function to check creds :O
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "inscribe.html";
  } else {
    alert("THOU SHALL NOT PASS!! \nInvalid emailID or password, twin 🥀");
  }
});
