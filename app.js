function newGrid() {
    // Ask for the size.
    let size = prompt("Please enter your grid dimensions: ");

    while (size > 100) {
        let size = prompt("Sorry, the maximum dimension is 100! Please enter a new dimension: ");
    }

    createGrid(size);
}

function createGrid(size) {
    let container = document.createElement("div"); // Create container for divs
    container.classList.add("container");

    // Create 64 "squares" and place them in the container.
    // Will use CSS to create the "grid" effect.
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement("div");
        square.classList.add("square");

        // When you hover over a square, it changes its background color.
        square.addEventListener("mouseover", event => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }

    // Append the container to the body. 
    document.body.appendChild(container);
}

function startUp() {
    createGrid(16);
}   


let button = document.getElementsByClassName("newGrid");
button.addEventListener("click", newGrid());
