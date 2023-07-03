let smileyImg
let grinsenImg

let mouthWidth = 30
let mouthHeight = 25
let mouthXPos = 75

let imgSize = 150
let imgX = 45
let imgY = 20

let sad

let wildX
let wildY

function preload() {
  curserImg = loadImage('Images/Lolli.png')
  smileyImg = loadImage('Images/Gesicht2.png')
  grinsenImg = loadImage('Images/Colour.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  noCursor()
  noFill()
  strokeWeight(1.5)
  frameRate(30)
}

function draw() {
  background(98, 245, 97)
  wildX = random(-2, 2)
  wildY = random(-2, 2)

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 7; i++) {
      image(smileyImg, imgX + j * 200, imgY + i * 200, imgSize, imgSize)
      //trauriger Mund
      sad = arc(imgX + mouthXPos + j * 200, 120 + i * 200, mouthWidth, mouthHeight, PI, 0)
      //linkes Auge
      //rect(90.5,73.5,18);

      //rechtes Auge
      //rect(130.5,73.5,18);

      push()
      fill(0)
      //linkes Auge
      let xc = constrain(mouseX, 95 + j * 200, 103 + j * 200)
      let xs = constrain(mouseY, 79 + i * 200, 87 + i * 200)
      circle(xc, xs, 8)

      //rechtes Auge
      let xcL = constrain(mouseX, 136 + j * 200, 144 + j * 200)
      let xsL = constrain(mouseY, 79 + i * 200, 87 + i * 200)
      circle(xcL, xsL, 8)
      pop()

      if (dist(mouseX, mouseY, imgX + j * 200, imgY + i * 200) < 200 / 2) {
        push()
        noStroke()
        fill(98, 245, 97)
        rect(imgX + j * 200, imgY + i * 200, imgSize)
        pop()
        image(grinsenImg, imgX + wildX + j * 200, imgY + wildY + i * 200, imgSize, imgSize)
        arc(
          imgX + mouthXPos + j * 200 + wildX,
          110 + i * 200 + wildY,
          mouthWidth,
          mouthHeight,
          0,
          PI
        )
      }
    }
  }

  //für Kreise die einen schweif hinter dem Lolli bilden
  //circle(mouseX+55,mouseY+30,20)

  image(curserImg, mouseX + 50, mouseY + 50, 68, 90)
}
