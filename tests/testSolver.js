const startTime = new Date();

const solver = require('../index.js');

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

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
