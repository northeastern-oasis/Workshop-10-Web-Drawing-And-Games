// This is ANOTHER function that p5.js uses--it's for loading things like images
function preload() {
    happy = loadImage("./happyface.png");

    // TODO: Try adding your own image! Make sure you copy it into this folder
}

// Remember: p5.js runs this once when the program starts (web page loads)
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // A basic circle
    // https://p5js.org/reference/#/p5/circle
    circle(30, 30, 20);

    // An ellipse at our mouse cursor
    // https://p5js.org/reference/#/p5/ellipse
    circle(mouseX, mouseY, 40, 20);

    // A basic square
    // https://p5js.org/reference/#/p5/square
    square(100, 100, 50);

    // An image!
    // https://p5js.org/reference/#/p5/image
    image(happy, 300, 300);

    // Some text! In middle of screen
    // https://p5js.org/reference/#/p5/text
    text("Hello world!", windowWidth / 2, windowHeight / 2);

    // TODO: Your turn!
    // Change the values above to change the shapes and view their docs to aee what arguments do.
    // And see reference for other shapes you can add!
    // https://p5js.org/reference/

}
