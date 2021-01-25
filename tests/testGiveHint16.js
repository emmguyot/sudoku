const startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(16);

// Check a basic grid 
let gridTest1 = [
    [null,null,null,null,       null,null,15,null,      null,null,null,null,     null,null,null,8],
    [null,null,null,null,       null,11,null,null,      9,3,null,null,           null,null,7,null],
    [null,null,null,null,       null,null,null,null,    null,null,null,null,     null,null,null,null],
    [null,null,null,3,          16,null,14,7,           null,null,null,null,     null,4,null,null],
    [null,null,null,null,       null,null,null,null,    null,null,null,null,     null,null,null,null],
    [null,8,null,null,          null,null,null,null,    14,null,11,null,         null,null,null,null],
    [null,null,null,null,       null,null,null,null,    null,null,null,null,     null,null,null,null],
    [null,null,10,null,         null,null,null,15,      null,16,null,null,       null,null,null,null],
    [null,null,null,null,       null,null,null,null,    15,null,3,null,          null,null,null,null],
    [null,null,6,null,          null,null,null,null,    null,11,null,null,       null,null,null,null],
    [null,null,null,null,       null,null,null,null,    6,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,    null,1,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,    null,null,null,null,     2,null,null,14],
    [null,null,null,null,       null,null,null,null,    3,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,    null,null,null,null,     null,null,null,null],
    [null,null,null,null,       null,3,null,null,       10,15,null,null,         null,null,null,1]];
let gridOk1 = [
    [6,10,1,13,     9,2,15,3,       5,4,7,12,       11,16,14,8],
    [5,4,16,12,     13,11,8,10,     9,3,15,14,      6,1,7,2],
    [2,15,7,14,     4,1,12,6,       11,8,16,13,     10,9,3,5],
    [9,11,8,3,      16,5,14,7,      1,2,6,10,       12,4,15,13],
    [12,16,11,4,    6,9,13,8,       2,7,5,3,        14,10,1,15],
    [7,8,3,15,      1,4,16,2,       14,10,11,9,     5,12,13,6],
    [1,2,13,5,      11,10,7,14,     4,6,12,15,      8,3,16,9],
    [14,6,10,9,     5,12,3,15,      8,16,13,1,      7,2,4,11],
    [10,9,4,11,     7,16,5,13,      15,14,3,2,      1,8,6,12],
    [13,12,6,1,     10,15,2,9,      16,11,8,7,      4,14,5,3],
    [3,5,2,16,      14,8,1,12,      6,13,9,4,       15,7,11,10],
    [15,7,14,8,     3,6,4,11,       12,1,10,5,      9,13,2,16],
    [11,3,9,10,     12,7,6,4,       13,5,1,16,      2,15,8,14],
    [4,1,15,2,      8,13,10,5,      3,12,14,11,     16,6,9,7],
    [16,13,12,6,    15,14,11,1,     7,9,2,8,        3,5,10,4],
    [8,14,5,7,      2,3,9,16,       10,15,4,6,      13,11,12,1]];
let hintGrid1 = solver.giveMeOneHint(gridTest1);
let phrase = `The hint ${JSON.stringify(hintGrid1)} isn't a hole of grid ${JSON.stringify(gridTest1)}`;
console.assert(gridTest1[hintGrid1.y][hintGrid1.x] === null, phrase);

phrase = `The hint ${JSON.stringify(hintGrid1)} isn't the right number for grid ${JSON.stringify(gridTest1)}`;
console.assert(gridOk1[hintGrid1.y][hintGrid1.x] === hintGrid1.number, phrase);

// Check an exper grid
let gridTest2 = [
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        3,null,null,null,           null,null,null,null],
    [null,null,14,null,         null,null,15,null,          null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,5,          null,10,null,null,          null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,10,null,          null,null,null,null],
    [null,null,null,null,       null,null,null,8,           null,null,null,null,        null,null,null,null],
    [null,10,null,null,         null,null,null,null,        13,null,null,null,          null,null,null,9],
    [null,4,null,null,          null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,12,null,null,          null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,5,null,           null,null,null,null],
    [null,null,null,7,          null,null,null,null,        16,null,null,2,             null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null],
    [null,null,null,null,       null,null,null,null,        null,null,null,null,        null,null,null,null]];
let gridOk2 = [
    [4,6,5,9,       7,11,13,2,      10,1,16,12,     15,14,3,8],
    [13,7,10,11,    8,4,12,5,       3,6,15,14,      1,16,9,2],
    [16,1,14,12,    3,9,15,6,       2,5,8,7,        10,11,4,13],
    [8,3,15,2,      10,1,14,16,     11,4,13,9,      7,6,5,12],
    [12,11,8,5,     2,10,7,1,       4,16,9,15,      13,3,6,14],
    [15,16,9,14,    12,6,3,13,      8,7,10,11,      5,1,2,4],
    [7,2,13,1,      9,16,4,8,       5,3,14,6,       11,15,12,10],
    [6,10,3,4,      14,15,5,11,     13,2,12,1,      16,8,7,9],
    [14,4,7,6,      13,5,10,15,     1,8,2,3,        9,12,11,16],
    [5,8,2,10,      1,7,9,14,       6,12,11,16,     3,4,13,15],
    [9,12,11,15,    16,2,8,3,       7,14,4,13,      6,10,1,5],
    [1,13,16,3,     6,12,11,4,      9,15,5,10,      8,2,14,7],
    [3,9,4,7,       15,14,6,10,     16,13,1,2,      12,5,8,11],
    [2,14,6,13,     5,3,16,12,      15,11,7,8,      4,9,10,1],
    [11,15,1,8,     4,13,2,9,       12,10,6,5,      14,7,16,3],
    [10,5,12,16,    11,8,1,7,       14,9,3,4,       2,13,15,6]];
let hintGrid2 = solver.giveMeOneHint(gridTest2);
phrase = `The hint ${JSON.stringify(hintGrid2)} isn't a hole of grid ${JSON.stringify(gridTest2)}`;
console.assert(gridTest2[hintGrid2.y][hintGrid2.x] === null, phrase);

phrase = `The hint ${JSON.stringify(hintGrid2)} isn't the right number for grid ${JSON.stringify(gridTest2)}`;
console.assert(gridOk2[hintGrid2.y][hintGrid2.x] === hintGrid2.number, phrase);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
