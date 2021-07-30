var mainNav = document.querySelector(".main-nav");
var openMenu = document.querySelector(".open-menu");
var closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  mainNav.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  mainNav.classList.remove("show");
});
