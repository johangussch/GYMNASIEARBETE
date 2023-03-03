let click = 0;

// PRODUCT SLIDES
let quantity1 = document.querySelector("#counter-1");
let quantity2 = document.querySelector("#counter-2");
let quantity3 = document.querySelector("#counter-3");
let quantity4 = document.querySelector("#counter-4");


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





