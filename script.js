const body = document.querySelector("body");
const divButtons = document.querySelectorAll(".btn-grid");

const div = document.createElement("div");

function generateGrid(cssClass, gridSize = 8) {
  const gridTotal = gridSize * gridSize;

  div.classList = `grid-container ${cssClass}`;
  body.appendChild(div);
  const gridContainer = document.querySelector(`.${cssClass}`);

  for (let i = 0; i < gridTotal; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList = "grid-item";
    gridContainer.appendChild(gridItem);
  }
}

function changeSize() {
  divButtons.forEach((button) => {
    button.addEventListener("click", () => {
      div.classList.remove("grid-8,grid-16,grid-32,grid-64");
      switch (true) {
        case button.getAttribute("id") === "grid-16":
          console.log(button.getAttribute("id"));
          generateGrid("grid-16", 16);
          break;
        case button.getAttribute("id") === "grid-32":
          generateGrid("grid-32", 32);
          break;
        case button.getAttribute("id") === "grid-64":
          generateGrid("grid-64", 64);
          break;
      }
    });
  });
}

generateGrid("grid-8");
changeSize();
