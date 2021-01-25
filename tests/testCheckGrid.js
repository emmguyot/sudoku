const startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(9);

// Sanity check
let gridTest1 = [
    [1, 2, 3,       4, 5, 6,        7, 8, null],
    [4, null, 6,    7, 8, 9,        1, 2, 3],
    [7, 8, 9,       null, 2, 3,     4, 5, 6],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
];
let position = { x: 1, y: 1 };
let isOk = solver.checkGrid(gridTest1, position, 4);
let phrase = `The position ${JSON.stringify(position)} for 4 is ${isOk}`;
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

position = { x: 3, y: 2 };
isOk = solver.checkGrid(gridTest1, position, 1);
phrase = `The position ${JSON.stringify(position)} for 1 is ${isOk}`;
console.assert(isOk === true, phrase);

position = { x: 3, y: 2 };
isOk = solver.checkGrid(gridTest1, position, 6);
phrase = `The position ${JSON.stringify(position)} for 6 is ${isOk}`;
console.assert(isOk === false, phrase);

position = { x: 8, y: 0 };
isOk = solver.checkGrid(gridTest1, position, 9);
phrase = `The position ${JSON.stringify(position)} for 9 is ${isOk}`;
console.assert(isOk === true, phrase);

position = { x: 8, y: 0 };
isOk = solver.checkGrid(gridTest1, position, 5);
phrase = `The position ${JSON.stringify(position)} for 5 is ${isOk}`;
console.assert(isOk === false, phrase);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
