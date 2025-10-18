const container = document.querySelector(".container");
const btnSize = document.getElementById("size");
const btnClear = document.getElementById("clear");
const btnColors = document.querySelectorAll(".colorButton");
const btnExtra = document.getElementById("randomColor");
const divs = [];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
let colorChoice = "black";
let mouseDown = false;
let number = 16;

createGrid(16);
colorChoose();

//Func that create new grid
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

//Func to request a number from a user (with limits)
function getNumber(){
    let n = prompt("Insert size number (min - 9, max - 100)", 16);
    number = n;
    if (n === null){
        n = 16;
        number = 16;
    } else if (n < 9){
        alert("Wrong input, try again")
        return;
    } else if (n > 100){
        alert("Wrong input, try again")
        return;
    };
    return n;
};

// Here is a flag that takes the value true or false when you interact with the mouse.
container.addEventListener("mousedown", () => {
    mouseDown = true;
});
document.addEventListener("mouseup", () => {
    mouseDown = false;
});

// Func that allows you to draw when you click/hold your mouse
function draw(){
    divs.forEach(div => {
        div.addEventListener("mousemove", () => {
            if (mouseDown === true){
                div.style.backgroundColor = colorChoice;
            };
        });
    });
    divs.forEach(div => {
        div.addEventListener("click", () => {
            div.style.backgroundColor = colorChoice;
        });
    });
};

//Btn event, which calls the function getNumber() to request a number for the grid size and calls the function createGrid() to create a grid with this value
btnSize.addEventListener("click", () => {
    colorChoice = "black"
    container.textContent = "";
    createGrid(getNumber());
});

//Btn event that clears the grid by creating a completely new one with the old value selected by the user or the default value
btnClear.addEventListener("click", () => {
    colorChoice = "black"
    container.textContent = "";
    createGrid(number);
});

//Btn event that allows the user to select a color, the color value is taken from the color button ID.
function colorChoose(){
    btnColors.forEach(btn => {
        btn.addEventListener("click", () => {
            colorChoice = btn.id;
        });
    });
};

// Extra task, btn that make you crazy and give you power to draw with random colors!!! 
btnExtra.addEventListener("click", () => {
    drawRngColor(true);
});

//Func that appeals to array "colors" and take random value from it
function rngColor(e){
    const rng = Math.floor(Math.random() * colors.length);
    colorChoice = colors[rng];
    if (mouseDown === true){
        e.target.style.backgroundColor = colorChoice;
    };
};

//Func that allow you to draw with random colors
function drawRngColor(enable){
    divs.forEach(div => {
        if (enable){
            div.addEventListener("mousemove", rngColor);
        } else {
            div.removeEventListener("mousemove", rngColor);
        }
    });
};











