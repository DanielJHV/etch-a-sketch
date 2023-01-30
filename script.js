let screen = document.querySelector(".screen");
let input = prompt("Number?");
let black = document.getElementById("black");
let random = document.getElementById("random");

changeGrid();

function changeGrid() { 
    for (let i=0; i < input * input; i++){
    let square = document.createElement("div");
    square.className = "square"; 
    screen.appendChild(square);
    }
    screen.style.gridTemplateColumns = `repeat(${input}, 1fr)`
    screen.style.gridTemplateRows = `repeat(${input}, 1fr)`
}

black.addEventListener("click", () => {
    random.style.backgroundColor = "#fff";
    random.style.color = "#000";
    black.style.backgroundColor = "#000";
    black.style.color = "#fff";
});

random.addEventListener("click", () => {
    black.style.backgroundColor = "#fff";
    black.style.color = "#000";
    random.style.backgroundColor = "#000";
    random.style.color = "#fff";
});
