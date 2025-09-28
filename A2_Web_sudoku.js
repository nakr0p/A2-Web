let numberTable = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

let selectNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let size = 800;
let distanceBetweenLine = size / 9;

let selected = 0;

let x; 
let y;
let xStart;
let yStart;

function setup() {
    createCanvas(displayWidth, displayHeight); 
    textAlign(CENTER, CENTER);

    x = (displayWidth / 2) - (size / 2);
    y = (displayHeight / 2) - (size / 2);
    xStart = x;
    yStart = y;
    
    textSize(distanceBetweenLine * 0.6); 
    
    while (numberTable.length < 9) {
        numberTable.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
}

function draw() {
    background(255); 

    drawSudokuTable(xStart, yStart, distanceBetweenLine, size);
    drawNumber(xStart, yStart, distanceBetweenLine);
    drawSelect(xStart, yStart, distanceBetweenLine);
}

function drawSudokuTable(x, y, d, s) {
    strokeWeight(1);
    for (let i = 0; i < 10; i++) {
        line(x + i * d, y, x + i * d, y + s);
        line(x, y + i * d, x + s, y + i * d);
    }
    
    strokeWeight(4);
    for (let i = 0; i < 4; i++) {
        line(x + i * 3 * d, y, x + i * 3 * d, y + s);
        line(x, y + i * 3 * d, x + s, y + i * 3 * d);
    }
}

function drawNumber(x, y, d) {
    fill(0); 
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
             if (numberTable[row] && numberTable[row][col] > 0) {
                 text(numberTable[row][col], x + col * d + (d / 2), y + row * d + (d / 2));
             }
        }
    }
}

function drawSelect(x, y, d) {
    
    let col = 0;
    
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(x + d * 10, y, d, d * 9); 
    
    while (col < 9) {
        let output = selectNumber[col];
        
        if (output === selected) {
            fill(200, 200, 255);
        } else {
            noFill();
        }

        stroke(0);
        strokeWeight(1);
        rect(x + d * 10, y + (col * d), d, d);
        
        fill(0);
        text(output, x + d * 10 + (d / 2), y + (col * d) + (d / 2));
        col++;
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        pickNumber(xStart, yStart, distanceBetweenLine);
        inputNumber(xStart, yStart, distanceBetweenLine);
    }
}

function pickNumber(x, y, d) {
    
    let row = 0;
    
    while (row < 9) {
        if (mouseX >= x + d * 10 && mouseX <= x + d * 11 && 
            mouseY >= y + d * row && mouseY <= y + d * (row + 1)) {
            
            selected = selectNumber[row];
            
            return;
        }
        row++;
    }
}

function inputNumber(x, y, d) {
    
    let row = 0;

    while (row < 9) {
        
        let col = 0;
        
        while (col < 9) {
            
            if (mouseX >= x + d * col && mouseX <= x + d * (col + 1) && 
                mouseY >= y + d * row && mouseY <= y + d * (row + 1)) {
                
                numberTable[row][col] = selected;
                
                return;
            }
            
            col++;
        }
        
        row++;
    }
}
