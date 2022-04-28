const mobi_togglers = document.querySelector(".header__menu-toggler");
const header_menu = document.querySelector(".header__menu");

mobi_togglers.addEventListener("click", () => {
  header_menu.classList.toggle("active");
});

const search = document.querySelector(".search");
const input_search = document.querySelector(".input-search");
search.addEventListener("click", () => {
  input_search.classList.toggle("active");
});
