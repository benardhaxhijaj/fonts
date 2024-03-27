const N_FRAMES = 200;
const SLOW_FACTOR = 20; // Adjust the factor to control the speed of slow motion
let font;

function preload() {
  font = loadFont(`./fonts/SpaceGrotesk-Bold.ttf`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30 / SLOW_FACTOR); // Adjust the frame rate for slow motion
  noStroke();
}

function draw() {
  background(0);

  let t = (TAU * (frameCount % N_FRAMES)) / N_FRAMES;

  let nShapes = 350;
  let s = (2 * width) / (nShapes * 5);
  textAlign(LEFT, BASELINE);
  let idx = 0;
  for (let y = 0; y < height; y += 8 * s) {
    for (let x = 0; x < width; x += 5 * s) {
      let on = sin((x + y) / width - t) > 0; // Toggle based on position and time
      fill(on ? color(255) : color(0)); // White when 'on', black when 'off'
      textFont(font, 20); // Set font for the text
      text(getRandomLetter(), x, y + 8 * s);
      idx++;
    }
    idx--;
  }
}

function getRandomLetter() {
  // Generate a random letter from A to Z
  let asciiValue = floor(random(65, 91)); // ASCII values for A to Z
  return String.fromCharCode(asciiValue);
}
