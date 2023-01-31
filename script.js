const gridContainer = document.querySelector(".grid-container");
const blackBtn = document.getElementById("black-btn");
const randomBtn = document.getElementById("random-btn");
const resetBtn = document.getElementById("reset-btn");
const number = document.getElementById("number");

changeGrid(16);

function changeGrid(size) {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.remove();
    })
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    chooseBlack();
}

function chooseBlack() {
    blackBtn.style.backgroundColor = "#000";
    blackBtn.style.color = "#fff";
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#000";
        });
    });
}

function chooseRandom() {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = "#" + randomColor;
        });
    });
}

function resetButtons() {
    document.querySelectorAll(".button").forEach(button => {
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
    })
}

blackBtn.addEventListener("click", () => {
    resetButtons();
    blackBtn.style.backgroundColor = "#000";
    blackBtn.style.color = "#fff";
    chooseBlack();
});

randomBtn.addEventListener("click", () => {
    resetButtons();
    randomBtn.style.backgroundColor = "#000";
    randomBtn.style.color = "#fff";
    chooseRandom()
});

resetBtn.addEventListener("click", () => {
    changeGrid(number.value);
    resetButtons();
    chooseBlack();
})

