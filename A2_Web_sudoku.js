let numberTable = [
    [1, 0, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 0, 5, 6, 7, 8, 9],
    [0, 2, 3, 4, 5, 6, 7, 8, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 0, 3, 4, 5, 6, 7, 8, 9],
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

    checkSudokuRow(xStart, yStart, distanceBetweenLine); 
    checkSudokuCol(xStart, yStart, distanceBetweenLine);
    checkSudokuBox3x3(xStart, yStart, distanceBetweenLine);
    
    drawSudokuTable(xStart, yStart, distanceBetweenLine, size);
    drawNumber(xStart, yStart, distanceBetweenLine);
    drawSelect(xStart, yStart, distanceBetweenLine);
}

function checkSudokuRow(x, y, d) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            for (let i = 1; col + i < 9; i++) {
                
                let currentNum = numberTable[row][col];
                let compareNum = numberTable[row][col + i];

                if (currentNum === compareNum && currentNum !== 0) {
                    fill(255, 0, 0, 50);
                    noStroke();
                    
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * (col + i), y + d * row, d, d);
                    
                    noFill();
                    stroke(0);
                }
            }
        }
    }
}

function checkSudokuCol(x, y, d) {
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            for (let i = 1; row + i < 9; i++) {
                
                let currentNum = numberTable[row][col];
                let compareNum = numberTable[row + i][col];
                
                if (currentNum === compareNum && currentNum !== 0) {
                    fill(255, 0, 0, 50);
                    noStroke();
                    
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * col, y + d * (row + i), d, d);
                    
                    noFill();
                    stroke(0);
                }
            }
        }
    }
}

function checkSudokuBox3x3(x, y, d) {
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    let currentRow = boxRow + row;
                    let currentCol = boxCol + col;
                    
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            let checkRow = boxRow + i;
                            let checkCol = boxCol + j;
                            
                            if (currentRow !== checkRow || currentCol !== checkCol) {
                                let currentNum = numberTable[currentRow][currentCol];
                                let checkNum = numberTable[checkRow][checkCol];
                                
                                if (currentNum === checkNum && currentNum !== 0) {
                                    fill(255, 0, 0, 50);
                                    noStroke();
                                    
                                    rect(x + d * currentCol, y + d * currentRow, d, d);
                                    rect(x + d * checkCol, y + d * checkRow, d, d);
                                    
                                    noFill();
                                    stroke(0);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
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
    strokeWeight(3);
    rect(x + d * 10, y, d, d * 9); 
    
    while (col < 9) {
        let output = selectNumber[col];
        
        if (output === selected) {
            fill(200, 200, 255);
        } else {
            noFill();
        }

        stroke(0);
        strokeWeight(3);
        rect(x + d * 10, y + (col * d), d, d);
        
        fill(0);
        text(output, x + d * 10 + (d / 2), y + (col * d) + (d / 2));
        noFill();
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
