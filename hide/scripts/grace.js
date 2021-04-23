window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // console.log(scrolled);
  document.getElementById("myBar").style.width = scrolled + "%";

if (window.pageYOffset  >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
