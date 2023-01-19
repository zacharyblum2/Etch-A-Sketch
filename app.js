// Set up a 16x16 grid of square divs. 
// Have a container hold the 16x16 divs, and place it in the HTML.

let container = document.createElement("div"); // Create container for divs
container.classList.add("container");

// Create 64 "squares" and place them in the container.
// Will use CSS to create the "grid" effect.
for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
}

// Append the container to the body. 
document.body.appendChild(container);