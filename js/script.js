const hamburger = document.getElementById("menu");
const nav = document.getElementById("nav--mobile");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
