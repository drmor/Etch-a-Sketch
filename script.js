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
    document.addEventListener("mouseup", () => {
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
    createGrid(getNumber());
})

btnClear.addEventListener("click", () => {
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
    });
});
function getNumber(){
    let n = prompt("Insert size number (min - 9, max - 100)", 16);
    if (n === null){
        n = 16
    } else if (n < 9){
        alert("Wrong input, try again")
        return
    } else if (n > 100){
        alert("Wrong input, try again")
        return
    };
    return n;
}
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
