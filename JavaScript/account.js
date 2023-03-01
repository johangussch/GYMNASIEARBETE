// POP UP DROP DOWN LIST WITH LOGIN INFORMATION
const account = () => {
  let popup = document.querySelector(".account-popup");

  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
};

// LÄGG TILL KLASSEN ACCOUNT-ACTIVE PÅ VARJE CSS FIL OCH STYLA EXAKT LIKADANT PÅ VARJE

const express = require("express");
const session = require("express-session");
const app = express();

// set up the session middleware
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

// route for handling login
app.post("/login", (req, res) => {
  // set the session variable when user logs in
  req.session.username = "JohnDoe";
  res.send("Logged in successfully!");
});

// route for displaying the account popup
app.get("/account", (req, res) => {
  const username = req.session.username || "Guest";
  const popupContent = `You are now logged in as ${username}`;
  res.send(popupContent);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
