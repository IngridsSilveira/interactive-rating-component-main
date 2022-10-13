const active = (element) => {
  let itens = document.getElementsByClassName("btns-circle");

  for (i = 0; i < itens.length; i++) {
    itens[i].classList.remove("active");
  }
  element.classList.add("active");
};

const box = document.querySelector("#box");
const box1 = document.querySelector("#box1");
const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", () => {
  const circleSelect = [...document.querySelectorAll(".active")];
  const numSelect = document.querySelector(".num-select");

  box.style.display = "none";
  box1.style.display = "block";

  circleSelect.map((element) => {
    numSelect.innerHTML = element.id;
  });
});
