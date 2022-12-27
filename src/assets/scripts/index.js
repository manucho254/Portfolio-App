// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// get elements
let navbar = document.querySelector(".nav");
let body = document.querySelector("body");
let navItems = document.querySelectorAll(".nav-item");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-sticky");
  }else {
    navbar.classList.remove("nav-sticky");
  }
} 

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () =>  {
        let arr = navItem.classList.value.split(" ")
        navItems.forEach((item) => {
            item.classList.remove("active")
        });
        if (arr.includes("active")) {
            navItem.classList.remove("active")
        }else{
            navItem.classList.add("active")
        }
    })
});


