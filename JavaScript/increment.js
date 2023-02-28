let click = 0;
let quantity = document.getElementById("counter");
let price = document.querySelector(".price");

function add() {
  click += 1;
  document.getElementById("counter").innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
}

function remove() {
  if (click > 0) {
    click -= 1;
  } else {
    click = 0;
  }
  document.getElementById("counter").innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
}