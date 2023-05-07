// Get a reference to body element
const body = document.querySelector("body");
const div = document.createElement("div");

function generateGrid(gridSize = 16) {
  // const div = document.createElement("div");

  div.classList = "container";
  body.appendChild(div);

  const container = document.querySelector(".container");

  for (let j = 0; j < gridSize; j++) {
    const divRowContainer = document.createElement("div");
    divRowContainer.classList = "div-row";
    container.appendChild(divRowContainer);
    for (let i = 0; i < gridSize; i++) {
      const divColItem = document.createElement("div");
      divColItem.classList = "div-item";
      divRowContainer.appendChild(divColItem);
    }
  }
}

function resetGrid() {
  // nodeToReplace.replaceWith(newNode)
  // body.reset();
}

function sketch() {
  const divChildren = document.querySelectorAll(".div-item");

  divChildren.forEach((divChild) => {
    divChild.addEventListener(
      "mouseover",
      (e) => {
        e.target.style.backgroundColor = "black";
      },
      false
    );
  });
}

function changeSize() {
  const divButtons = document.querySelectorAll(".btn-grid");
  divButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resetGrid();

      switch (true) {
        case button.getAttribute("id") === "grid-16":
          generateGrid(16);
          break;
        case button.getAttribute("id") === "grid-32":
          generateGrid(32);
          break;
        case button.getAttribute("id") === "grid-64":
          generateGrid(64);
          break;
      }
    });
  });
}

generateGrid();
changeSize();
sketch();

// body.removeChild(div);
// const reset = document.querySelector(".reset");
// reset.addEventListener("click", () => {
//   body.removeChild(div);
// });
// generateGrid();
