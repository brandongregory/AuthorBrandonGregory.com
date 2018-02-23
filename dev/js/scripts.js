let navTrigger = document.querySelector(".js-nav-trigger");
let nav = document.querySelector("header nav");

navTrigger.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    nav.classList.toggle("open");
});