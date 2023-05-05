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
  const divRowContainer = document.createElement("div");
  divRowContainer.classList = "div-row";
  container.appendChild(divRowContainer);
  for (let i = 0; i < 16; i++) {
    const divColItem = document.createElement("div");
    // divColItem.textContent = "x";
    divColItem.classList = "div-item";
    divRowContainer.appendChild(divColItem);
  }
}

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
