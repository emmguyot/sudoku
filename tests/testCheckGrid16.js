const startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(16);

// Sanity check
let gridTest1 = [
    [1, 2, 3, 10,       4, 5, 6, 11,        14, 13, 15, null,   7, 8, 9, 12],
    [4, null, 6, 11,    7, 8, 9, 12,        1, 2, 3, 10,        14, 13, 15, 16],
    [7, 8, 9, 12,       14, 13, 15, 16,     4, 5, 6, 11,        1, 2, 3, 10],
    [14, 13, 15, 16,    null, 2, 3, 10,     7, 8, 9, 12,        4, 5, 6, 11],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
];
let position = { x: 0, y: 0 };
let isOk = solver.checkGrid(gridTest1, position, 1);
let phrase = `The position ${JSON.stringify(position)} for 1 is ${isOk}`;
console.assert(isOk === false, phrase);


position = { x: 1, y: 1 };
isOk = solver.checkGrid(gridTest1, position, 4);
phrase = `The position ${JSON.stringify(position)} for 4 is ${isOk}`;
console.assert(isOk === false, phrase);

position = { x: 1, y: 1 };
isOk = solver.checkGrid(gridTest1, position, 5);
phrase = `The position ${JSON.stringify(position)} for 5 is ${isOk}`;
console.assert(isOk === true, phrase);

position = { x: 1, y: 1 };
isOk = solver.checkGrid(gridTest1, position, 8);
phrase = `The position ${JSON.stringify(position)} for 8 is ${isOk}`;
console.assert(isOk === false, phrase);

position = { x: 1, y: 1 };
isOk = solver.checkGrid(gridTest1, position, 3);
phrase = `The position ${JSON.stringify(position)} for 3 is ${isOk}`;
console.assert(isOk === false, phrase);

position = { x: 4, y: 3 };
isOk = solver.checkGrid(gridTest1, position, 1);
phrase = `The position ${JSON.stringify(position)} for 1 is ${isOk}`;
console.assert(isOk === true, phrase);

position = { x: 4, y: 3 };
isOk = solver.checkGrid(gridTest1, position, 6);
phrase = `The position ${JSON.stringify(position)} for 6 is ${isOk}`;
console.assert(isOk === false, phrase);

position = { x: 11, y: 0 };
isOk = solver.checkGrid(gridTest1, position, 16);
phrase = `The position ${JSON.stringify(position)} for 16 is ${isOk}`;
console.assert(isOk === true, phrase);

position = { x: 11, y: 0 };
isOk = solver.checkGrid(gridTest1, position, 5);
phrase = `The position ${JSON.stringify(position)} for 5 is ${isOk}`;
console.assert(isOk === false, phrase);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
