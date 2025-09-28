let number_table = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
];

let sizeTable = 800;
let distance_between_line = sizeTable / 9;
let select_number = [1,2,3,4,5,6,7,8,9];
let tableX, tableY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  tableX = (width/2) - (sizeTable/2);
  tableY = (height/2) - (sizeTable/2);
}

function draw() {
  background(255);

  draw_sudoku_table(tableX, tableY, distance_between_line, sizeTable);
  draw_number(tableX, tableY, distance_between_line);
  draw_select(tableX, tableY, distance_between_line);
}

function draw_sudoku_table(x, y, d, s) {
  let distance_between_line = s / 9;
  strokeWeight(5);
  noFill();
  rect(x, y, s, s);

  for (let i = 1; i <= 9; i++) {
    if (i % 3 === 0) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }

    
    line(x + distance_between_line * i, y, x + distance_between_line * i, y + s); // x-axis line
    line(x, y + distance_between_line * i, x + s, y + distance_between_line * i); // y-axis line
  }
}

function draw_number(x, y, d) {
  fill(0);
  textSize(d / 2);
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let val = number_table[row][col];
      text(val, x + col*d + d/2, y + row*d + d/2);
    }
  }
}

function draw_select(x, y, d) {
  let sqr_size = 80;
  strokeWeight(3);
  textSize(sqr_size/2);
  textAlign(CENTER, CENTER);

  for (let col = 0; col < 9; col++) {
    let output = select_number[col];

    
    noFill();
    rect(width - 200, 100 + col * sqr_size, sqr_size, sqr_size);
    fill(0);
    text(output, width - 200 + sqr_size/2, 100 + col*sqr_size + sqr_size/2);
  }
}
