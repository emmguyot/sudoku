let startTime = new Date();

import { Sudoku } from '../index.mjs';

let solver = new Sudoku(9);

function testGenerateWith(nbToFill) {

    startTime = new Date();
    console.log("Generate for : " + nbToFill);

    let gridTest1 = solver.generateGrid(nbToFill);
    let count = 0;
    for (let x = 0; x < solver.GRID_SIZE; x++) {
        for (let y = 0; y < solver.GRID_SIZE; y++) {
            if (gridTest1[y][x] !== null) {
                count++;
            }
        }
    }
    let duration = new Date() - startTime;
    console.log("Duration to generate (ms) : " + duration);
    console.assert(count === nbToFill, `Wrong number of item in the grid : ${count} vs ${nbToFill}`);
    console.assert(solver.solver(gridTest1) !== null, `Generated grid is broken : ${JSON.stringify(gridTest1)}`);
    //console.log(`Grid : ${JSON.stringify(gridTest1)}`);
    // Time to compute
    duration = new Date() - startTime;
    console.log("Duration (ms) : " + duration);
}

for (let i = 0; i < 10; i++) {
    // Nightmare level 16
    testGenerateWith(16);

    // Hard level 19-23 - Easy to generate
    testGenerateWith(20);

    // Medium leve 24-39
    testGenerateWith(25);

    // Easy level 30-37
    console.log(`Step : ${i}`);
    testGenerateWith(30);
}