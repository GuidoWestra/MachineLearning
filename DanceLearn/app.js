function connect() {
  brain.model = ml5.featureExtractor("MobileNet").classification(brain.eyes);
}

function learnUp() {
  brain.status = "Learn up";
  brain.model.addImage("Up");
}
function learnDown() {
  brain.status = "Learn down";
  brain.model.addImage("Down");
}
function makeButtons() {
  const up = createButton("Up");
  up.mousePressed(learnUp);
  const down = createButton("Down");
  down.mousePressed(learnDown);
}
function makeListen() {
  makeHead();
  connect();
  makeButtons();
}
