// Declare some basic variables we'll be using
let paws;
let pawsX=0, pawsY=0;


// Another function run automatically by p5.js!
// This one loads in assets such as images
function preload() {
    // TODO: load in the paws.png image using the loadImage function given by p5.js
    // https://p5js.org/reference/#/p5/loadImage
    paws = loadImage("./paws.png");
}

// Remember: p5.js runs this ONCE to set up things like your canvas
function setup() {
    // TODO: Create a canvas that is the width and height of the window
    // https://p5js.org/reference/#/p5/createCanvas
    // https://p5js.org/reference/#/p5/windowHeight
    // https://p5js.org/reference/#/p5/windowWidth
    createCanvas(windowWidth, windowHeight);

    // This sets the image mode to be center--it'll help us later on
    imageMode(CENTER);
}

// Remember: p5.js runs this CONSTANTLY to update our screen
function draw() {
    // TODO: set the background color to red (Northeastern color)
    // https://p5js.org/reference/#/p5/background
    background('red');

    // TODO: Draw the dog treat at the mouse cursor position. Draw it as an ellipse and make it yellow
    // https://p5js.org/reference/#/p5/fill (to set drawing color)
    // https://p5js.org/reference/#/p5/ellipse
    // https://p5js.org/reference/#/p5/mouseX
    // https://p5js.org/reference/#/p5/mouseY
    fill('yellow');
    ellipse(mouseX, mouseY, 20, 20);

    // TODO: uncomment the following lines. We use linear interpolation to make paws get slower as he nears the treat
    // To read more about linear interpolation (lerp) see https://p5js.org/reference/#/p5.Vector/lerp
    pawsY = lerp(pawsY, mouseY, 0.02);
    pawsX = lerp(pawsX, mouseX, 0.02);

    // TODO: draw the paws image at x location pawsX, y location pawsY. Set its width and height to 150
    // https://p5js.org/reference/#/p5/image
    image(paws, pawsX, pawsY, 150, 150);

    // TODO (TRICKY!): We do collision checking manually: let's check to see if Paws got the treat
    // TODO (cont): Change the if statement to see if Paws' X and Y position are close enough to the mouse that they're touching
    // TODO: Hint: the image width is 150 px. How can we use this to our advantage? Check the solution if you get stuck
    if (pawsX <= mouseX + 75 && pawsX >= mouseX - 75 && pawsY >= mouseY - 75 && pawsY <= mouseY + 75 && frameCount > 100) {

        // TODO: Stop the loop if Paws gets the treat
        // https://p5js.org/reference/#/p5/noLoop
        noLoop();

        // TODO: Set the text size to something large (maybe 40) and draw "You Lose" in the middle of the screen
        // hint: Can you use windowWidth and windowHeight to draw something in the middle of the screen
        textSize(32);
        text("You lose!", windowWidth / 2, windowHeight / 2);
    }
}
