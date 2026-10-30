const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;

    square.addEventListener("mouseenter", () => {
      square.classList.add("colored");
    });

    container.appendChild(square);
  }
}

createGrid(16);
const btn = document.querySelector("#size-btn");

btn.addEventListener("click", () => {
  const size = prompt("Squares per side? (max 100)");
});
