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

function paintBlack() {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener(
      "mouseover",
      (e) => {
        e.target.style.backgroundColor = "rgb(0, 0, 0)";
      },
      false
    );
  });
}

function getRainbowColor() {
  // Returns a random color from array of 5 possible colors
  const choiceArray = [
    "#FF0000",
    "#FF8700",
    "#FFD300",
    "#DEFF0A",
    "#A1FF0A",
    "#0AFF99",
    "#0AEFFF",
    "#147DF5",
    "#580AFF",
    "#BE0AFF",
  ];
  var randomColor = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  console.log(randomColor);
  return randomColor;
}

function darkenGridItem() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    let gradingStep = 25;
    let blackShade = 255 - gradingStep;
    gridItem.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = `rgb(${blackShade},
        ${blackShade},${blackShade})`;
      blackShade -= gradingStep;
    });
  });
}

function paintGridRainbow() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    // let rainbowColor = getRainbowColor();
    gridItem.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = getRainbowColor();
    });
  });
}

generateGrid();
changeSize();

const shading = document.querySelector(".shading");
shading.addEventListener("click", darkenGridItem);

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", paintGridRainbow);

// const reset = document.querySelector(".reset");
// reset.addEventListener("click", generateGrid); // this doesn't work
