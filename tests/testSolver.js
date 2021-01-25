const startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(9);

// Check a basic grid (extracted from Page 44 of ...)
let gridTest1 = [
    [6, null, null,       null, 7, null,        3, null, null],
    [null, null, null,    3, null, null,        1, 2, null],
    [8, null, null,       null, null, null,     null, null, 5],
    [null, 9, null,       7, null, 4,           2, null, null],
    [2, null, null,       null, null, null,     null, null, 1],
    [null, null, 7,       1, null, 2,           null, 8, null],
    [4, null, null,       null, null, null,     null, null, 7],
    [null, 5, 6,          null, null, 3,        null, null, null],
    [null, null, 3,       null, 9, null,        null, null, 4],
];
let gridOk1 = [
    [6, 1, 5,       2, 7, 9,     3, 4, 8],
    [9, 7, 4,       3, 5, 8,     1, 2, 6],
    [8, 3, 2,       4, 1, 6,     7, 9, 5],
    [5, 9, 1,       7, 8, 4,     2, 6, 3],
    [2, 6, 8,       9, 3, 5,     4, 7, 1],
    [3, 4, 7,       1, 6, 2,     5, 8, 9],
    [4, 8, 9,       5, 2, 1,     6, 3, 7],
    [7, 5, 6,       8, 4, 3,     9, 1, 2],
    [1, 2, 3,       6, 9, 7,     8, 5, 4],
];
let gridRes1 = solver.solver(gridTest1);
let phrase = `The final grid for ${JSON.stringify(gridTest1)} is ${JSON.stringify(gridRes1)}`;
console.assert(JSON.stringify(gridOk1) === JSON.stringify(gridRes1), phrase);

// Check an exper grid (extracted from Microsoft Sudoku)
let gridTest2 = [
    [null, 3, 9,          2, null, null,        null, null, null],
    [null, 1, null,       null, null, null,     9, 5, null],
    [2, null, null,       6, null, null,        null, null, 1],
    [6, null, null,       3, null, null,        null, null, 4],
    [null, null, 2,       null, 9, null,        5, null, 3],
    [null, null, null,    null, null, 2,        null, null, null],
    [1, null, null,       null, 6, 7,           null, null, 9],
    [null, 5, 7,          null, null, 4,        null, 2, null],
    [null, null, 3,       9, null, 1,           7, 8, null],
];
let gridOk2 = [
    [5, 3, 9,       2, 1, 8,        4, 6, 7],
    [8, 1, 6,       7, 4, 3,        9, 5, 2],
    [2, 7, 4,       6, 5, 9,        8, 3, 1],
    [6, 9, 1,       3, 8, 5,        2, 7, 4],
    [7, 8, 2,       4, 9, 6,        5, 1, 3],
    [3, 4, 5,       1, 7, 2,        6, 9, 8],
    [1, 2, 8,       5, 6, 7,        3, 4, 9],
    [9, 5, 7,       8, 3, 4,        1, 2, 6],
    [4, 6, 3,       9, 2, 1,        7, 8, 5]
];
let gridRes2 = solver.solver(gridTest2);
phrase = `The final grid for ${JSON.stringify(gridTest2)} is ${JSON.stringify(gridRes2)}`;
console.assert(JSON.stringify(gridOk2) === JSON.stringify(gridRes2), phrase);

// Check a basic grid (extracted from Page 44 of ...)
let chaineTest1 = "600070300" 
                + "000300120"
                + "800000005"
                + "090704200"
                + "200000001"
                + "007102080"
                + "400000007"
                + "056003000"
                + "003090004";
gridRes1 = solver.solver(solver.stringToGrid(chaineTest1));
phrase = `The final grid for ${chaineTest1} is ${JSON.stringify(gridRes1)}`;
console.assert(JSON.stringify(gridOk1) === JSON.stringify(gridRes1), phrase);

// Check an expert grid (extracted from Microsoft Sudoku)
let chaineTest2 =     "039200000"
                    + "010000950"
                    + "200600001"
                    + "600300004"
                    + "002090503"
                    + "000002000"
                    + "100067009"
                    + "057004020"
                    + "003901780";
gridOk2 = [
    [5, 3, 9,       2, 1, 8,        4, 6, 7],
    [8, 1, 6,       7, 4, 3,        9, 5, 2],
    [2, 7, 4,       6, 5, 9,        8, 3, 1],
    [6, 9, 1,       3, 8, 5,        2, 7, 4],
    [7, 8, 2,       4, 9, 6,        5, 1, 3],
    [3, 4, 5,       1, 7, 2,        6, 9, 8],
    [1, 2, 8,       5, 6, 7,        3, 4, 9],
    [9, 5, 7,       8, 3, 4,        1, 2, 6],
    [4, 6, 3,       9, 2, 1,        7, 8, 5]
];
gridRes2 = solver.solver(solver.stringToGrid(chaineTest2));
phrase = `The final grid for ${chaineTest2} is ${JSON.stringify(gridRes2)}`;
console.assert(JSON.stringify(gridOk2) === JSON.stringify(gridRes2), phrase);

// Check an difficult grid
// extracted from François Laburthe, Guillaume Rochart, Narendra Jussien, "Evaluer la difficulté d'une grillede sudoku à l'aide d'un modèle contraintes", 2006
let chaineTest3 =     "580004200"
                    + "020608000"
                    + "000070000"
                    + "900040000"
                    + "000007386"
                    + "000000004"
                    + "000800005"
                    + "036000009"
                    + "005090072";
let gridOk3 = [
    [5, 8, 9,   1, 3, 4,    2, 6, 7], 
    [1, 2, 7,   6, 5, 8,    9, 4, 3], 
    [6, 4, 3,   2, 7, 9,    1, 5, 8], 
    [9, 7, 8,   3, 4, 6,    5, 2, 1], 
    [2, 5, 4,   9, 1, 7,    3, 8, 6], 
    [3, 6, 1,   5, 8, 2,    7, 9, 4], 
    [7, 9, 2,   8, 6, 1,    4, 3, 5], 
    [4, 3, 6,   7, 2, 5,    8, 1, 9], 
    [8, 1, 5,   4, 9, 3,    6, 7, 2]
];
let gridRes3 = solver.solver(solver.stringToGrid(chaineTest3));
phrase = `The final grid for ${chaineTest3} is ${JSON.stringify(gridRes3)}`;
console.assert(JSON.stringify(gridOk3) === JSON.stringify(gridRes3), phrase);

// Check an very difficult grid
// extracted from www.assistant-sudoku.com
let chaineTest4 =     "000000070"
                    + "060010004"
                    + "003400200"
                    + "800043050"
                    + "002950748"
                    + "040080009"
                    + "020060007"
                    + "000100900"
                    + "700008060";
let gridOk4 = [
    [9, 5, 4,   8, 2, 6,    1, 7, 3], 
    [2, 6, 8,   3, 1, 7,    5, 9, 4], 
    [1, 7, 3,   4, 9, 5,    2, 8, 6], 
    [8, 1, 9,   7, 4, 3,    6, 5, 2], 
    [6, 3, 2,   9, 5, 1,    7, 4, 8], 
    [5, 4, 7,   6, 8, 2,    3, 1, 9], 
    [4, 2, 1,   5, 6, 9,    8, 3, 7], 
    [3, 8, 6,   1, 7, 4,    9, 2, 5], 
    [7, 9, 5,   2, 3, 8,    4, 6, 1]
];
let gridRes4 = solver.solver(solver.stringToGrid(chaineTest4));
phrase = `The final grid for ${chaineTest4} is ${JSON.stringify(gridRes4)}`;
console.assert(JSON.stringify(gridOk4) === JSON.stringify(gridRes4), phrase);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
