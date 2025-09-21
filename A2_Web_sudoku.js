
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawSudokuTable();
}

function drawSudokuTable() {
  let tableSize = 450;
  let cellSize = tableSize / 9;


  let startX = (width - tableSize) / 2;
  let startY = (height - tableSize) / 2;

  
  for (let i = 0; i <= 9; i++) {
    let x = startX + i * cellSize;
    if (i % 3 === 0) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(x, startY, x, startY + tableSize);
  }

  
  for (let i = 0; i <= 9; i++) {
    let y = startY + i * cellSize;
    if (i % 3 === 0) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(startX, y, startX + tableSize, y);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
