const startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(16);

// Check a grid x 16
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
let gridRes1 = solver.solver(gridTest1);
let phrase = `The final grid for ${JSON.stringify(gridTest1)} is ${JSON.stringify(gridRes1)}`;
console.assert(JSON.stringify(gridOk1) === JSON.stringify(gridRes1), phrase);

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
let gridRes2 = solver.solver(gridTest2);
phrase = `The final grid for ${JSON.stringify(gridTest2)} is ${JSON.stringify(gridRes2)}`;
console.assert(JSON.stringify(gridOk2) === JSON.stringify(gridRes2), phrase);

// Check a basic grid
let chaineTest1 = "000000F000000008" 
                + "00000B0093000070"
                + "0000000000000000"
                + "0003G0E700000400"
                + "0000000000000000"
                + "08000000E0B00000"
                + "0000000000000000"
                + "00A0000F0G000000"
                + "00000000F0300000"
                + "006000000B000000"
                + "0000000060000000"
                + "0000000001000000"
                + "000000000000200E"
                + "0000000030000000"
                + "0000000000000000"
                + "00000300AF000001"
                ;
gridRes1 = solver.solver(solver.stringToGrid(chaineTest1));
phrase = `The final grid for ${chaineTest1} is ${JSON.stringify(gridRes1)}`;
console.assert(JSON.stringify(gridOk1) === JSON.stringify(gridRes1), phrase);

// Check an expert grid
let chaineTest2 =     "0000000000000000"
                    + "0000000030000000"
                    + "00E000F000000000"
                    + "0000000000000000"
                    + "00050A0000000000"
                    + "0000000000A00000"
                    + "0000000800000000"
                    + "0A000000C0000009"
                    + "0400000000000000"
                    + "000000000C000000"
                    + "0000000000000000"
                    + "0000000000500000"
                    + "00070000G0020000"
                    + "0000000000000000"
                    + "0000000000000000"
                    + "0000000000000000";
gridOk2 = [
    [10,9,5,4,      6,8,3,16,       11,2,12,14,     13,15,1,7],
    [13,11,7,1,     10,5,9,14,      3,15,6,4,       2,12,8,16],
    [2,6,14,3,      12,1,15,7,      13,10,8,16,     9,5,11,4],
    [15,12,16,8,    4,2,11,13,      1,9,7,5,        3,10,14,6],
    [16,13,12,5,    14,10,1,6,      8,11,15,9,      7,2,4,3],
    [8,14,15,11,    3,9,16,2,       6,4,10,7,       1,13,5,12],
    [9,7,4,6,       13,15,12,8,     5,1,2,3,        10,14,16,11],
    [3,10,1,2,      5,7,4,11,       12,14,16,13,    15,8,6,9],
    [5,4,2,10,      8,3,7,12,       15,16,14,11,    6,1,9,13],
    [6,8,3,9,       2,11,13,15,     10,12,4,1,      5,16,7,14],
    [7,15,11,12,    16,14,5,1,      9,13,3,6,       8,4,10,2],
    [1,16,13,14,    9,6,10,4,       2,7,5,8,        11,3,12,15],
    [14,3,8,7,      15,4,6,9,       16,5,1,2,       12,11,13,10],
    [4,1,10,13,     11,16,2,5,      7,3,9,12,       14,6,15,8],
    [11,2,9,16,     1,12,8,10,      14,6,13,15,     4,7,3,5],
    [12,5,6,15,     7,13,14,3,      4,8,11,10,      16,9,2,1]];
gridRes2 = solver.solver(solver.stringToGrid(chaineTest2));
phrase = `The final grid for ${chaineTest2} is ${JSON.stringify(gridRes2)}`;
console.assert(JSON.stringify(gridOk2) === JSON.stringify(gridRes2), phrase);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
