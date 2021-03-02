const Goal = "Start the game";
const brain = {
  status: "Ready",
  goal: Goal,
  hint: 0,
};

const hints = ["Up", "Down", "Up", "Down", "Up", "Down", "Left"];

console.log(`
*******************************
****Initial Log****************
*******************************
****Status:${brain.status}*****
****First :${hints[0]}*********
****Second:${hints[1]}*********
*******************************
****End of the log*************
*******************************
`);

function setGoal() {
  brain.goal = hints[brain.hint];
  console.log("Goal is:", brain.goal);
  brain.hint++;
  brain.hint = brain.hint % hints.length;
}
function talk() {
  console.log("hello world");
}

function remember() {
  save(brain.mouth, "Memory");
}

function makeEars() {
  const button = createButton("Remember");
  button.mousePressed(remember);
}

function makeHead() {
  makeFace();
  makeEars();
}

setInterval(setGoal, 2000);
