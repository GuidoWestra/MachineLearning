function makeEyes() {
  brain.eyes = createCapture(VIDEO);
}

function makeMouth() {
  brain.mouth = createCanvas(640, 550);
}

function makeFace() {
  makeEyes();
  makeMouth();
}

function speak() {
  background(255);
  brain.eyes.hide();
  image(brain.eyes, 0, 0, 640, 480);

  text(brain.goal, 0, 500);
  text(brain.status, 0, 520);
}

window.draw = speak;
window.setup = makeListen;
