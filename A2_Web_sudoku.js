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
        line(x, y + i *
