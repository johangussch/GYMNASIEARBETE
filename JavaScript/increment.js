let click = 0;
let cartQuantity1 = document.querySelector("#counter-cart-1");
let cartQuantity2 = document.querySelector("#counter-cart-2");
let cartQuantity3 = document.querySelector("#counter-cart-3");
// PRODUCT SLIDES
let quantity1 = document.querySelector("#counter-1");
let quantity2 = document.querySelector("#counter-2");
let quantity3 = document.querySelector("#counter-3");
let quantity4 = document.querySelector("#counter-4");
let price = document.querySelector(".price");


// function add() {
//   click += 1;
//   cartQuantity1.innerHTML = click;
//   cartQuantity2.innerHTML = click;
//   cartQuantity3.innerHTML = click;
//   let totalPrice = parseFloat(price.textContent) * click;
//   document.querySelector(".total-text").innerHTML = totalPrice;
// }

document.querySelector(".add-1").addEventListener("click", function () {
  cartQuantity1.innerHTML = 0;
  click += 1;
  cartQuantity1.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
});

document.querySelector(".add-2").addEventListener("click", function () {
  cartQuantity2.innerHTML = 0;
  click += 1;
  cartQuantity2.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
});

document.querySelector(".add-3").addEventListener("click", function () {
  cartQuantity3.innerHTML = 0;
  click += 1;
  cartQuantity3.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
});

function remove() {
  if (click > 0) {
    click -= 1;
  } else {
    click = 0;
  }
  cartQuantity1.innerHTML = click;
  cartQuantity2.innerHTML = click;
  cartQuantity3.innerHTML = click;
  let totalPrice = parseFloat(price.textContent) * click;
  document.querySelector(".total-text").innerHTML = totalPrice;
}

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

document.querySelector(".add-to-cart-1").addEventListener("click", function() {
  document.querySelector(".test-1").classList.add("clicked");
    
    setTimeout(function() {
      document.querySelector(".test-1").classList.remove('clicked');
    }, 1000);  
});

document.querySelector(".add-to-cart-2").addEventListener("click", function() {
  document.querySelector(".test-2").classList.add("clicked");
    
    setTimeout(function() {
      document.querySelector(".test-2").classList.remove('clicked');
    }, 1000);  
});

document.querySelector(".add-to-cart-3").addEventListener("click", function() {
  document.querySelector(".test-3").classList.add("clicked");
    
    setTimeout(function() {
      document.querySelector(".test-3").classList.remove('clicked');
    }, 1000);  
});

document.querySelector(".add-to-cart-4").addEventListener("click", function() {
  document.querySelector(".test-4").classList.add("clicked");
    
    setTimeout(function() {
      document.querySelector(".test-4").classList.remove('clicked');
    }, 1000);  
});