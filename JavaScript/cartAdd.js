let click1 = 0;
let click2 = 0;
let click3 = 0;
let cartQuantity1 = document.querySelector("#counter-cart-1");
let cartQuantity2 = document.querySelector("#counter-cart-2");
let cartQuantity3 = document.querySelector("#counter-cart-3");


let price1 = document.querySelector(".price-1");
let price2 = document.querySelector(".price-2");
let price3 = document.querySelector(".price-3");

let totalPrice = 0;

document.querySelector(".add-1").addEventListener("click", function () {
  cartQuantity1.innerHTML = 0;
  click1 += 1;
  cartQuantity1.innerHTML = click1;
  totalPrice += parseFloat(price1.textContent);
  document.querySelector(".total-text").innerHTML = totalPrice;
});

document.querySelector(".add-2").addEventListener("click", function () {
  cartQuantity2.innerHTML = 0;
  click2 += 1;
  cartQuantity2.innerHTML = click2;
  totalPrice += parseFloat(price2.textContent);
  document.querySelector(".total-text").innerHTML = totalPrice;
});

document.querySelector(".add-3").addEventListener("click", function () {
  cartQuantity3.innerHTML = 0;
  click3 += 1;
  cartQuantity3.innerHTML = click3;
  totalPrice += parseFloat(price3.textContent);
  document.querySelector(".total-text").innerHTML = totalPrice;
});



document.querySelector(".remove-1").addEventListener("click", function () {
  if (click1 > 0) {
    cartQuantity1.innerHTML = --click1;
    totalPrice -= parseFloat(price1.textContent);
    document.querySelector(".total-text").innerHTML = Math.max(totalPrice, 0);
  }
});

document.querySelector(".remove-2").addEventListener("click", function () {
  if (click2 > 0) {
    cartQuantity2.innerHTML = --click2;
    totalPrice -= parseFloat(price2.textContent);
    document.querySelector(".total-text").innerHTML = Math.max(totalPrice, 0);
  }
});

document.querySelector(".remove-3").addEventListener("click", function () {
  if (click3 > 0) {
    cartQuantity3.innerHTML = --click3;
    totalPrice -= parseFloat(price3.textContent);
    document.querySelector(".total-text").innerHTML = Math.max(totalPrice, 0);
  }
});

document.querySelector(".confirm").addEventListener("click", function () {
  document.querySelector(".purchase").style.display = "block";
});


document.querySelector(".trash-1").addEventListener("click", function () {
  document.querySelector(".cart-card-1").style.display = "none";
});

document.querySelector(".trash-2").addEventListener("click", function () {
  document.querySelector(".cart-card-2").style.display = "none";
});

document.querySelector(".trash-3").addEventListener("click", function () {
  document.querySelector(".cart-card-3").style.display = "none";
});