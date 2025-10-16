const container = document.querySelector(".container");
const btnSize = document.getElementById("size");
const btnClear = document.getElementById("clear");
const divs = [];
let mouseDown = false;
createGrid(16);

function draw(){
    container.addEventListener("mousedown", () => {
        mouseDown = true;
    });
    container.addEventListener("mouseup", () => {
        mouseDown = false;
    });
    divs.forEach(div => {
        div.addEventListener('mousemove', () => {
            if (mouseDown === true){
                div.style.backgroundColor = 'black';
            };
        });
    });
};

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
    draw()
};
