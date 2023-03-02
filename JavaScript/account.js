function account() {
  let popup = document.querySelector(".account-popup");
  
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
};

const isLoggedIn = localStorage.getItem("isLoggedIn");
function login() {
  localStorage.setItem("isLoggedIn", true);
}

if (isLoggedIn) {
  document.querySelector(".login-switch").style.display = "none";
  
  document.querySelector(".temp-logout").style.display = "block";
  
  document.querySelector(".account-status").textContent = "You are logged in.";

  document.querySelector(".temp-logout").onclick = function() {
    localStorage.clear();
    location.reload();
  }
}