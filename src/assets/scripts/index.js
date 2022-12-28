// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// get elements
let navbar = document.querySelector(".nav");
let body = document.querySelector("body");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
