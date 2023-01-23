let btn = document.getElementById("new");
btn.addEventListener("click", newGrid);

function newGrid() {
    // Ask for the size.
    let size = prompt("Please enter your grid dimensions: ");

    while (size > 100) {
        let size = prompt("Sorry, the maximum dimension is 100! Please enter a new dimension: ");
    }

    // Remove the previous grid.
    let removeMe = document.getElementById("contain");
    document.body.removeChild(removeMe);
    createGrid(size);
}

function createGrid(size) {
    let container = document.createElement("div"); // Create container for divs
    container.classList.add("container");
    container.setAttribute('id', 'contain');

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

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