const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Make canvas the size of the screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// Characters used in the Matrix rain
const characters =
  "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Size of each character
const fontSize = 16;

// Number of columns
let columns = Math.floor(canvas.width / fontSize);

// Position of each falling character
let drops = Array(columns).fill(1);


// Draw the Matrix rain
function drawMatrix() {

  // Dark transparent layer creates the fading trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Green characters
  ctx.fillStyle = "#00ff41";
  ctx.font = `${fontSize}px monospace`;

  // Draw every column
  for (let i = 0; i < drops.length; i++) {

    // Pick random character
    const character =
      characters[Math.floor(Math.random() * characters.length)];

    // Draw character
    ctx.fillText(
      character,
      i * fontSize,
      drops[i] * fontSize
    );

    // If character reaches bottom, randomly restart it
    if (
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    // Move character downward
    drops[i]++;
  }
}


// Run animation
setInterval(drawMatrix, 35);


// Button
//const enterButton = document.getElementById("enterButton");

//enterButton.addEventListener("click", () => {
//  alert("Welcome to the Matrix.");
//});