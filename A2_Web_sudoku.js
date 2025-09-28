let number_table = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  draw_sudoku_table(600);
}

function draw_sudoku_table(s) {
  let x = (width / 2) - (s / 2);
  let y = (height / 2) - (s / 2);
  let d = s / 9;

  
  for (let i = 1; i <= 8; i++) {
    if (i % 3 === 0) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(x + d * i, y, x + d * i, y + s); 
    line(x, y + d * i, x + s, y + d * i); 
  }

  
  strokeWeight(5);
  noFill();
  rect(x, y, s, s);

  draw_number(x, y, d);
}

function draw_number(x, y, d) {
  textSize(d * 0.6);
  fill(0);

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let output = number_table[row][col];
      text(output, x + d * col + d / 2, y + d * row + d / 2);
    }
  }
}
