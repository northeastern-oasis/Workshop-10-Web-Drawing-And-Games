// Declare some basic variables we'll be using
let sadface;
let frogX=0, frogY=0;


// Another function run automatically by p5.js!
// This one loads in assets such as images
function preload() {
    // TODO: load in the sadface.png image using the loadImage function given by p5.js
    // https://p5js.org/reference/#/p5/loadImage
    sadface = loadImage("./sadface.png");
}

// Remember: p5.js runs this ONCE to set up things like your canvas
function setup() {
    // TODO: Create a canvas that is the width and height of the window
    createCanvas(windowWidth, windowHeight);

    // This sets the image mode to be center--it'll help us later on
    imageMode(CENTER);
}

function draw() {
    background(50, 220, 144);
    ellipse(mouseX, mouseY, 20, 20);
    frogY = lerp(frogY, mouseY, 0.02);
    frogX = lerp(frogX, mouseX, 0.02);
    image(frog, frogX, frogY, 150, 150);
    if (frogX <= mouseX + 75 && frogX >= mouseX - 75 && frogY >= mouseY - 75 && frogY <= mouseY + 75 && frameCount > 100) {
        noLoop();
        textSize(32);

        text("You lose!", windowWidth / 2, windowHeight / 2);
    }
}
