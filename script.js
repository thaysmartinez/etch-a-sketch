// Get a reference to body element
const body = document.querySelector("body");

// Create new main div and store it in a variable
const div = document.createElement("div");

// Add class to div element
div.classList = "container";
// Append div element to body
body.appendChild(div);

// Get reference to class container div
const container = document.querySelector(".container");

for (let j = 0; j < 16; j++) {
  const divRow = document.createElement("div");
  divRow.classList = "div-row";
  container.appendChild(divRow);
  for (let i = 0; i < 16; i++) {
    const divCol = document.createElement("div");
    divCol.textContent = "x";
    divCol.classList = "div-col";
    divRow.appendChild(divCol);
  }
}
