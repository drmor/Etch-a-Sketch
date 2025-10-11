const container = document.querySelector(".container");
const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", () =>{
    let num = prompt("choose number")
    for (let i = 0; i < num; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
};
});
