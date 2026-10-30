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
  const size = Number(prompt("Squares per side? (max 100)"));
  if (size >= 1 && size <= 100) {
    container.innerHTML = "";
    createGrid(size);
  }
});
