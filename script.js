const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn-grid");
const grid = document.querySelector("#grid");

function generateGrid(size = 16, cssClass = "grid16") {
  grid.classList = `${cssClass}`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList = "grid-item";
    grid.appendChild(gridItem);
  }
}

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function changeSize() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (true) {
        case button.getAttribute("id") === "grid-16":
          removeGrid();
          generateGrid(16, "grid16");
          break;
        case button.getAttribute("id") === "grid-32":
          removeGrid();
          generateGrid(32, "grid32");
          break;
        case button.getAttribute("id") === "grid-64":
          removeGrid();
          generateGrid(64, "grid64");
          break;
      }
    });
  });
}

generateGrid();
changeSize();
