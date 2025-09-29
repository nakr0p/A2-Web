let size = 600;
let x_start;
let y_start;
let number_table = [];
let select_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let distance_between_line;
let selected = 0;
let game_status = false;
let check_status = false;

function setup() {
    let w = windowWidth;
    let h = windowHeight;
    createCanvas(w, h);
    
    textAlign(CENTER, CENTER);
    x_start = (w / 2) - (size / 2);
    y_start = (h / 2) - (size / 2);
    
    distance_between_line = size / 9;
    
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
    check_sudoku(x_start, y_start, distance_between_line);
    
    if (game_status == false) {
        
        draw_sudoku_table(x_start, y_start, distance_between_line, size);
        draw_number(x_start, y_start, distance_between_line);
        draw_select(x_start, y_start, distance_between_line);
        pick_number(x_start, y_start, distance_between_line);
        input_number(x_start, y_start, distance_between_line);
        check_sudoku(x_start, y_start, distance_between_line);
        
    } else {
        text("YOU WIN", width / 2, height / 2);
    }
}

function draw_sudoku_table(x, y, d, s) {
    strokeWeight(5);
    
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
    
    let row = 0;
    while (row < 9) {
        let col = 0;
        while (col < 9) {
            let i = 1;
            while (col + i < 9) {

                if (number_table[row][col] == number_table[row][col + i] || number_table[row][col] == 0) {
                    return false;
                } else {
                    return true;
                }
                    
                i++;
            }
            col++;
        }
        row++;
    }
    return true;
}
    
function alert_sudoku_row(x, y, d) {
    
    let row = 0;
    while (row < 9) {
        let col = 0;
        while (col < 9) {
            let i = 1;
            while (col + i < 9) {

                if (number_table[row][col] != 0 && number_table[row][col] == number_table[row][col + i]) {
                    fill(255, 0, 0, 100);
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * (col + i), y + d * row, d, d);
                    noFill();
                    return false;
                }
                    
                else if (number_table[row][col] == 0) {
                    return false;
                } else {
                    return true;
                }

                i++;
            }
            col++;
        }
        row++;
    }
}

function check_sudoku_col(x, y, d) {

    let col = 0;
    while (col < 9) {
        let row = 0;
        while (row < 9) {
            let i = 1;
            while (row + i < 9) {

                if (number_table[row][col] == number_table[row + i][col] && number_table[row][col] == 0) {
                    return false;
                } else {
                    return true;
                }
                    
                i++;
                    
                row++;
            }
            
        }
        col++;
    }
    return true;
}
    
function alert_sudoku_col(x, y, d) {
        
    let col = 0;
    while (col < 9) {
        let row = 0;
        while (row < 9) {
            let i = 1;
            while (row + i < 9) {
                if (number_table[row][col] != 0 && number_table[row][col] == number_table[row + i][col]) {
                    fill(255, 0, 0, 100);
                    rect(x + d * col, y + d * row, d, d);
                    rect(x + d * col, y + d * (row + i), d, d);
                    noFill();
                    return false;
                }
                
                else if (number_table[row][col] == 0) {
                    return false;
                }
                
                else {
                    return true;
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
    while (box_row < 9) {
        let box_col = 0;
        while (box_col < 9) {
            
            let row = 0;
            while (row < 3) {
                let col = 0;
                while (col < 3) {
                    let current_row = box_row + row;
                    let current_col = box_col + col;
                    
                    let i = 0;
                    while (i < 3) {
                        let j = 0;
                        while (j < 3) {
                            let check_row = box_row + i;
                            let check_col = box_col + j;
                            if (current_row != check_row || current_col != check_col) {
                                if (number_table[current_row][current_col] == number_table[check_row][check_col] && number_table[current_row][current_col] == 0) {
                                    return false;
                                } else {
                                    return true;
                                }
                                    
                            }
                            j++;
                        }
                        i++;
                    }
                    
                    col++;
                }
                row++;
            }
            
            box_col += 3;
        }
        box_row += 3;
    }
    return true;
}
    
function alert_sudoku_box_3x3(x, y, d) {
        
    let box_row = 0;
    while (box_row < 9) {
        let box_col = 0;
        while (box_col < 9) {
            
            let current_row = box_row;
            while (current_row < box_row + 3) {
                let current_col = box_col;
                while (current_col < box_col + 3) {
                    
                    let i = 0;
                    while (i < 3) { 
                        let j = 0;
                        while (j < 3) {
                            
                            let check_row = box_row + i;
                            let check_col = box_col + j;

                            if (number_table[current_row][current_col] != 0 && 
                                (current_row != check_row || current_col != check_col) && 
                                number_table[current_row][current_col] == number_table[check_row][check_col]) {
                                
                                fill(255, 0, 0, 100);
                                rect(x + d * current_col, y + d * current_row, d, d);
                                rect(x + d * check_col, y + d * check_row, d, d);
                                noFill();
                                
                                return false;
                            }
                            
                            else if (number_table[row][col] == 0) {
                                return false;
                            } else {
                                return true;
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
    
    alert_sudoku_row(x, y, d);
    alert_sudoku_col(x, y, d);
    alert_sudoku_box_3x3(x, y, d);

    if (check_sudoku_row(x, y, d) && check_sudoku_col(x, y, d) && check_sudoku_box_3x3(x, y, d)) {
        check_status = true;
        game_status = true;
    }
}

function load_sudoku(file_name) {

}
