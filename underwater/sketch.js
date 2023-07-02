let ySpacing = 7; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 40; // Height of wave
let period = 300.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let waveSpace = 40;

let extra = 0;

let nenner;

let spikes = 80;

let grow = 0;

let anzahlStern;

//let randSterne[sterne];

let randSterneX = [];

let randSterneY = [];

let randInvert = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth + 16;
  dx = (TWO_PI / period) * ySpacing;
  yvalues = new Array(floor(w / ySpacing));
  noStroke();
  //noCursor();
  spikes = floor(random(1, 8) * 10);

  nenner = floor(random(3, 5) * 200);

  anzahlStern = floor(random(1, 5));

  //randSterne[sterne] = random(100,300);

  for (let i = 0; i < anzahlStern; i++) {
    randSterneX.push(random(200, 1000));
    randSterneY.push(random(200, 500));
  }
}

function draw() {
  background(0, 95);
  calcWave();
  renderWave();
  star();

  //sternschnuppe

  if (anzahlStern < 2.5) {
    for (let sterne = 0; sterne < anzahlStern; sterne++) {
      push();
      translate(width * 0.5, height * 0.5);
      rotate(frameCount / 150.0);
      star(
        mouseX - randSterneX[sterne],
        mouseY - randSterneY[sterne],
        60,
        50,
        spikes
      );
      stroke(2);

      //auge1
      fill("white");
      circle(mouseX - randSterneX[sterne], mouseY - randSterneY[sterne], 20);
      fill("black");
      circle(
        mouseX - randSterneX[sterne] - 3,
        mouseY - randSterneY[sterne],
        10
      );

      //Auge2
      fill("white");
      circle(
        mouseX - randSterneX[sterne] + 30,
        mouseY - randSterneY[sterne],
        20
      );
      fill("black");
      circle(
        mouseX - randSterneX[sterne] + 27,
        mouseY - randSterneY[sterne],
        10
      );
      pop();
    }
  } else {
    for (let sterne = 0; sterne < anzahlStern; sterne++) {
      push();
      translate(width * 0.5, height * 0.5);
      rotate(frameCount / 150.0);
      star(
        mouseY - randSterneY[sterne],
        mouseX - randSterneX[sterne],
        60,
        50,
        spikes
      );
      stroke(2);

      //auge1
      fill("white");
      circle(mouseY - randSterneY[sterne], mouseX - randSterneX[sterne], 20);
      fill("black");
      circle(
        mouseY - randSterneY[sterne],
        mouseX - randSterneX[sterne] - 3,
        10
      );

      //Auge2
      fill("white");
      circle(
        mouseY - randSterneY[sterne],
        mouseX - randSterneX[sterne] + 30,
        20
      );
      fill("black");
      circle(
        mouseY - randSterneY[sterne],
        mouseX - randSterneX[sterne] + 27,
        10
      );
      pop();
    }
  }
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta + extra;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  fill(40, 200, 40);
  let myList = [
    0.5174273656667813,
    0.5548854490090023,
    0.6625239423635643,
    0.8295989968842414,
    0.7582321484120962,
    0.9522229495870141,
    0.943595388157455,
    0.894318515985205,
    0.8213062431685674,
    0.8259119027711039,
    0.653184199170221,
    0.9234891320362103,
    0.7359880218843604,
    0.9112106443965026,
    0.5898702012017409,
    0.5924578502522448,
    0.6045139713491133,
    0.7675370575773417,
    0.6949383339261852,
    0.8879609170596783,
    0.6428354937339189,
    0.9124715727185064,
    0.5337832829165758,
    0.6326240217144654,
    0.8078234146915451,
    0.7367963923027745,
    0.9788618235832713,
    0.9644154512037912,
    0.8009211041612584,
    0.7969067888182765,
    0.7902920189737686,
    0.5255775053703308,
    0.6158929137460729,
    0.860004946351437,
    0.9200317857233602,
    0.9113830011190176,
    0.8748312713257749,
    0.6745671978340785,
    0.9117552705693703,
    0.870556858478731,
    0.8170848159505855,
    0.8359306005632181,
    0.7921614936630529,
    0.6685459285635358,
    0.9795582543336052,
    0.5438449518120153,
    0.9978408993898775,
    0.6573451641662814,
    0.6425576626513059,
    0.7415271023080322,
    0.8581259558556961,
    0.8311394885604159,
    0.8040094447668948,
    0.8778325887534996,
    0.9833785983669239,
    0.7169177210410052,
    0.6897176324864591,
    0.8583512358146652,
    0.541737355716927,
    0.9924359132876915,
    0.816941434967014,
    0.5208425112061947,
    0.831187485347876,
    0.8014612492972786,
    0.5626855997312645,
    0.9624094886947439,
    0.8676047037567578,
    0.9248051938589883,
    0.7042942081407095,
    0.9883895872548112,
    0.6455614440739094,
    0.5994870540542813,
    0.9839164764033728,
    0.5618793721537216,
    0.5019775026361557,
  ];

  for (let i = 0; i < 100; i++) {
    // A simple way to draw the wave with an ellipse at each location
    for (let y = 0; y < yvalues.length * myList[i] * grow; y++) {
      ellipse(-50 + yvalues[y] + i * waveSpace, y * -ySpacing + height, 16, 16);
    }
  }

  grow += 0.01;

  if (grow > 0.4) {
    grow = 0.4;
  }
}
//star
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill("white");
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseMoved() {
  extra += 0.02;
}
