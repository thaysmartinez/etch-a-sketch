const body = document.querySelector("body");
const div = document.createElement("div");
div.classList = "grid-container";

body.appendChild(div);

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList = "grid-item";
  gridContainer.appendChild(gridItem);
}
