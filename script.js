const container = document.querySelector(".container");
const btnSize = document.getElementById("size");
const btnClear = document.getElementById("clear");
const btnColors = document.querySelectorAll(".colorButton");
const btnExtra = document.getElementById("randomColor");
const divs = [];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
let colorChoice = "black";
let mouseDown = false;
let number = 0;

createGrid(16);
colorChoose();

function rngColor(e){
    const rng = Math.floor(Math.random() * colors.length);
    colorChoice = colors[rng];
    if (mouseDown === true){
        e.target.style.backgroundColor = colorChoice;
    };
};

function drawRngColor(enable){
    divs.forEach(div => {
        if (enable){
            div.addEventListener("mousemove", rngColor);
        } else {
            div.removeEventListener("mousemove", rngColor);
        }
    });
};

btnExtra.addEventListener("click", () => {
    drawRngColor(true);
});

function colorChoose(){
    btnColors.forEach(btn => {
        btn.addEventListener("click", () => {
            colorChoice = btn.id;
        });
    });
};
container.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.addEventListener("mouseup", () => {
    mouseDown = false;
});
function draw(){
    divs.forEach(div => {
        div.addEventListener("mousemove", () => {
            if (mouseDown === true){
                div.style.backgroundColor = colorChoice;
            };
        });
    });
};

btnSize.addEventListener("click", () => {
    drawRngColor(false)
    colorChoice = "black"
    container.textContent = "";
    createGrid(getNumber());
});

btnClear.addEventListener("click", () => {
    colorChoice = "black"
    container.textContent = "";
    createGrid(number)
});
function getNumber(){
    let n = prompt("Insert size number (min - 9, max - 100)", 16);
    number = n;
    if (n === null){
        n = 16;
    } else if (n < 9){
        alert("Wrong input, try again")
        return;
    } else if (n > 100){
        alert("Wrong input, try again")
        return;
    };
    return n;
};
function createGrid(n){
    for (let i = 0; i < n * n; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = container.clientWidth / n + "px";
        container.appendChild(cell);
        divs.push(cell)
    };
    draw();
};
