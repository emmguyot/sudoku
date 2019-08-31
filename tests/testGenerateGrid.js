const startTime = new Date();

const solver = require('../index.js');

// Sanity check
let nbToFill = 17;
let gridTest1 = solver.generateGrid(nbToFill);
let compteur = 0;
for (let x = 0; x < solver.GRID_SIZE; x++) {
    for (let y = 0; y < solver.GRID_SIZE; y++) {
        if (gridTest1[y][x] !== null) {
            compteur++;
        }
    }
}
console.assert (compteur === nbToFill, `Nombre d'éléments placés incorrect : ${compteur} contre ${nbToFill}`);
console.assert (solver.resolve(gridTest1) !== null, `Grille générée incorrecte : ${JSON.stringify(gridTest1)}`);

// Time to compute
const duration = new Date() - startTime;
console.log("Duration (ms) : " + duration);
