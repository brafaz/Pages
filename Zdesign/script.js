const burger = document.querySelector(".header__right-burger");
const headernav = document.getElementById("header__nav");
const headerHeight = window
  .getComputedStyle(document.body)
  .getPropertyValue("--header-height");
burger.addEventListener("click", () => {
  if (headernav.style.top == headerHeight) {
    headernav.style = ``;
    return;
  }
  headernav.style = `top:${headerHeight};opacity:1;pointer-events:all;`;
});
