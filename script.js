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
  darkenGridItem();
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
          sketch();
          break;
        case button.getAttribute("id") === "grid-32":
          removeGrid();
          generateGrid(32, "grid32");
          sketch();
          break;
        case button.getAttribute("id") === "grid-64":
          removeGrid();
          generateGrid(64, "grid64");
          sketch();
          break;
      }
    });
  });
}

function sketch() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener(
      "mouseover",
      (e) => {
        e.target.style.backgroundColor = "rgb(0, 0, 0)";
        // e.target.style.backgroundColor = getRandomColor();
      },
      false
    );
  });
}

function getRandomColor() {
  // Returns a random color from array of 5 possible colors
  const choiceArray = ["#173F5F", "#20639B", "#3CAEA3", "#F6D55C", "#ED553B"];
  var randomColor = choiceArray[Math.floor(Math.random() * choiceArray.length)];

  return randomColor;
}

function darkenGridItem() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    let enterEventCount = 0.1;
    gridItem.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = `rgba(0,0,0,${enterEventCount}`;
      console.log(enterEventCount);
      enterEventCount += 0.1;
    });
  });
}

generateGrid();
changeSize();
