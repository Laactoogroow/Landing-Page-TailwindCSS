const Hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

Hamburger.addEventListener("click", function () {
  let src = Hamburger.src.includes("hamburger")
    ? "img/icon-close.svg"
    : "img/icon-hamburger.svg";
  Hamburger.src = src;

  Menu.classList.toggle('hidden')
  Menu.classList.toggle('flex')
});
