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

function train(loss) {
  if (loss > 0) {
    brain.status = loss;
  } else {
    brain.status = "Playing";
  }
}

function startThinking() {
  brain.status = `Thinking... Status:${brain.status}`;
  brain.model.train(train);
}

function makeSmart() {
  makeListen();
  const think = createButton("think");
  think.mousePressed(startThinking);
}
function makePrediction() {
  speak();
}

function predict(error, result) {
  if (error) {
    console.log(error);
  } else {
    brain.prediction = result[0].label;

    brain.model.classify(predict);
  }
}
