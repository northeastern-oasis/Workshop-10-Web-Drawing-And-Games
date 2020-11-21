let frog;
let frogX=0, frogY=0;


// Loading in assets such as images
function preload() {
    frog = loadImage("./froggy.png");
}

// Special P5JS Code
function setup() {
    createCanvas(windowWidth, windowHeight);
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
