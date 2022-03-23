const colorBtn = document.querySelector(".color_btn");
const colorContainer = document.querySelector(".color_container");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexValues.length);
    hash += hexValues[randomNumber];
  }

  const element = document.createElement("div");
  element.className = "color_box";
  element.textContent = hash;
  element.style.background = hash;
  colorContainer.appendChild(element);
  element.addEventListener("click", () => element.remove());
}

colorBtn.addEventListener("click", randomColor);
