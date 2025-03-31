const plans = document.querySelectorAll(".plan");
const btnprev = document.getElementById("btnprev");
const btnnext = document.getElementById("btnnext");
const comentlenta = document.getElementById("coment-lenta");
const dots = document.querySelectorAll(".comentsmain-dot");
dots[0].style.backgroundColor = "#f53838";
plans.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    el.classList.remove("active");
  });
});
let lentleft = 0;
btnprev.addEventListener("click", () => {
  lentleft += 1400;
  if (lentleft >= 1400) {
    lentleft = -1400;
    dots[1].style.backgroundColor = "#f53838";
    dots[0].style.backgroundColor = "#DDE0E4";
    comentlenta.style.left = lentleft + "px";
    return;
  }
  dots[0].style.backgroundColor = "#f53838";
  dots[1].style.backgroundColor = "#DDE0E4";
  comentlenta.style.left = lentleft + "px";
});
btnnext.addEventListener("click", () => {
  lentleft -= 1400;
  if (lentleft <= -2800) {
    lentleft = 0;
    dots[0].style.backgroundColor = "#f53838";
    dots[1].style.backgroundColor = "#DDE0E4";
    comentlenta.style.left = lentleft + "px";
    return;
  }
  dots[1].style.backgroundColor = "#f53838";
  dots[0].style.backgroundColor = "#DDE0E4";
  comentlenta.style.left = lentleft + "px";
});
