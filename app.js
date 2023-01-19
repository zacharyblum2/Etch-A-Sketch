// Set up a 16x16 grid of square divs. 
// Have a container hold the 16x16 divs, and place it in the HTML.

let container = document.createElement("div"); // Create container for divs

// Create 16x16 grid.
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");

    // Add all the columns to the row.
    for (let j = 0; j < 16; j++) {
        let col = document.createElement("div");
        
        row.appendChild(col);
    }

    // Append the row to the container.
    container.appendChild(row);
}

// Append the container to the body. 
document.body.appendChild(container);