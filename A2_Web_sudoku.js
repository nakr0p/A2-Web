let size = 600;
let x_start = 50;
let y_start = 50;
let number_table = [];
let select_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let distance_between_line;
let selected = 0;
let game_status = false;

function setup() {
    createCanvas(700, 700);
    distance_between_line = size / 9;
    
    // Initialize number_table (assuming it should be a 9x9 array)
    for (let i = 0; i < 9; i++) {
        number_table[i] = new Array(9).fill(0);
    }
}

function draw() {
    background(255);
    
    draw_sudoku_table(x_start, y_start, distance_between_line, size);
    draw_number(x_start, y_start, distance_between_line);
    draw_select(x_start, y_start, distance_between_line);
    pick_number(x_start, y_start, distance_between_line);
    input_number(x_start, y_start, distance_between_line);
    
    check_sudoku_row(x_start, y_start, distance_between_line);
    check_sudoku_col(x_start, y_start, distance_between_line);
    check_sudoku_box_3x3(x_start, y_start, distance_between_line);
    
    check_sudoku(x_start, y_start, distance_between_line);
}

function draw_sudoku_table(x, y, d, s) {
    
}

function draw_number(x, y, d) {
    
}

function draw_select(x, y, d) {
    
}

function pick_number(x, y, d) {
    
}

function input_number(x, y, d) {
    
}

function check_sudoku_row(x, y, d) {
    
    //check row
    let row = 0;
    while (row < 9) {
        let col = 0;
        while (col < 9) {
            let i = 1;
            while ((col + i) < 9) {
                if (number_table[row][col] != 0 && number_table[row][col] == number_table[row][col + i]) {
                    fill(255, 0, 0, 100); 
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * (col + i), y + d * row, d, d);
                    noFill();
                    game_status = false;
                }
                    
                if (number_table[row][col] == 0) {
                    game_status = false;
                }

                i++;
            }
            col++;
        }
        row++;
    }
}

function check_sudoku_col(x, y, d) {
    
    //check col
    let col = 0;
    while (col < 9) {
        let row = 0;
        while (row < 9) {
            let i = 1;
            while ((row + i) < 9) {
                if (number_table[row][col] != 0 && number_table[row][col] == number_table[row + i][col]) {
                    fill(255, 0, 0, 100); 
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * col, y + d * (row + i), d, d);
                    noFill();
                    game_status = false;
                }

                i++;
            }
            row++;
        }
        col++;
    }
}

function check_sudoku_box_3x3(x, y, d) {
    
    let box_row = 0;
    while (box_row < 9) { //box
        let box_col = 0;
        while (box_col < 9) { //box

            let current_row = box_row;
            while (current_row < box_row + 3) {
                let current_col = box_col;
                while (current_col < box_col + 3) {
                    
                    let i = 0;
                    while (i < 9) { 
                        let j = 0;
                        while (j < 9) { 
                            
                            let check_row = box_row + Math.floor(i / 3);
                            let check_col = box_col + (i % 3);

                            if (number_table[current_row][current_col] != 0 && 
                                (current_row != check_row || current_col != check_col) && 
                                number_table[current_row][current_col] == number_table[check_row][check_col]) {
                                
                                fill(255, 0, 0, 100); 
                                rect(x + d * current_col, y + d * current_row, d, d);
                                rect(x + d * check_col, y + d * check_row, d, d);
                                noFill();
                                game_status = false;
                            }

                            j++;
                        }
                        i++;
                    }
                    current_col++;
                }
                current_row++;
            }

            box_col += 3;
        }
        box_row += 3;
    }
}

function check_sudoku(x, y, d) {
    
    check_sudoku_row(x, y, d);
    check_sudoku_col(x, y, d);
    check_sudoku_box_3x3(x, y, d);
}

function load_sudoku(file_name) {

    // File loading logic is specific to p5.js (e.g., loadStrings)
    // The structure is kept as requested, but the implementation is conceptual.
    
    // return table 
}
