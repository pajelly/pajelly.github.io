// intro box effect 

window.onscroll = function() {myFunction()};

var introBox = document.getElementById('hero-section');
var changePoint = 30;

// removeOrange.addEventListener('transitionend', hideEl);

function myFunction() {
  if (window.pageYOffset >= changePoint) {
    introBox.classList.add("not-sticky");
  } else {
    introBox.style.display = 'inline-flex';
    introBox.classList.remove("not-sticky");

  }
}
