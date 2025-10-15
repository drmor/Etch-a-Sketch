const container = document.querySelector(".container");
const btnSize = document.getElementById("size");
const btnClear = document.getElementById("clear");
const divs = [];
createGrid(16);

btnSize.addEventListener("click", () => {
    container.textContent = "";
    let n = prompt("number");
    createGrid(n);
})

btnClear.addEventListener("click", () => {
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
    });
});

function createGrid(n){
    for (let i = 0; i < n * n; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = container.clientWidth / n + "px";
        container.appendChild(cell);
        divs.push(cell)
    }
    divs.forEach(div => {
        div.addEventListener('mousemove', () => {
            div.style.backgroundColor = 'black';
        });
    });
}
