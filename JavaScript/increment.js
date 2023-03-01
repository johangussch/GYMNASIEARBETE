let click = 0;
let quantity = document.querySelector("#counter");
// PRODUCT SLIDES
let quantity1 = document.querySelector("#counter-1");
let quantity2 = document.querySelector("#counter-2");
let quantity3 = document.querySelector("#counter-3");
let quantity4 = document.querySelector("#counter-4");
let price = document.querySelector(".price");

function counterClick() {
  click += 1;
  // PRODUCT SLIDES
  quantity1.innerHTML = click;
  quantity2.innerHTML = click;
  quantity3.innerHTML = click;
  quantity4.innerHTML = click;
  
  document.querySelector(".nav-cart-1").style.background = "darkgreen"
  document.querySelector(".nav-cart-2").style.background = "darkgreen"
  document.querySelector(".nav-cart-3").style.background = "darkgreen"
  document.querySelector(".nav-cart-4").style.background = "darkgreen"
}

function add() {
  click += 1;
  quantity.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
}

function remove() {
  if (click > 0) {
    click -= 1;
  } else {
    click = 0;
  }
  quantity.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
}