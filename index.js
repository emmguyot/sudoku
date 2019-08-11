const startTime = new Date();
const GRID_SIZE=9;

function checkGrid(grid, position, number) {

    // Check hline
    let hlineOk = true;
    for (let i = 0; i < GRID_SIZE; i++) {
        hlineOk = hlineOk && (grid[position.y][i] !== number);
    }

    // Check vline
    let vlineOk = true; 
    for (let i = 0; i < GRID_SIZE; i++) {
        vlineOk = vlineOk && (grid[i][position.x] !== number);
    }

    // Check Square
    let squareOk = true;
    const squareXStart = Math.trunc(position.x / 3) * 3;
    const squareYStart = Math.trunc(position.y / 3) * 3;

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            squareOk = squareOk && (grid[squareYStart+y][squareXStart+x] !== number);
        }
    }

    return squareOk && vlineOk && hlineOk;
}

function solver(grid) {

    const workGrid = grid.clone();
    const holes = [];

    // Step 0 : Nothing to do ? Exit (for recyursion)

    // Step 1 : search each hole

    // Step 2 : for each hole, enumerate possibilities

    // Step 3 : Fill hole with only 1 possibility

    // Step 4 : Repeat until no more obvious hole

    // Try one possibility and recurse

    // If no success remove the possibility and loop

    return workGrid;
}

exports.checkGrid = checkGrid;
exports.solver = solver;
