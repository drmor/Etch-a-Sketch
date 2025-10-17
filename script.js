const container = document.querySelector(".container");
const btnSize = document.getElementById("size");
const btnClear = document.getElementById("clear");
const btnColors = document.querySelectorAll(".colorButton");
const btnExtra = document.getElementById("randomColor");
const divs = [];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
let colorChoice = "black";
let mouseDown = false;

createGrid(16);
colorChoose();

function randomColorDraw(){
    divs.forEach(rgb => {
        rgb.addEventListener("mousemove", () => {
            const rng = Math.floor(Math.random() * colors.length);
            colorChoice = colors[rng];
            if (mouseDown === true){
                rgb.style.backgroundColor = colorChoice;
            };
        });  
    });
};

btnExtra.addEventListener("click", () => {
    randomColorDraw();
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
    container.textContent = "";
    createGrid(getNumber());
});

btnClear.addEventListener("click", () => {
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
});
function getNumber(){
    let n = prompt("Insert size number (min - 9, max - 100)", 16);
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
