/**
 * Résulution de Sudoku
 * Développé par Emmanuel Guyot
 * Licence GPL v2
 */
class Sudoku {

    constructor(gridSize = 9) {
        this.GRID_SIZE = gridSize;
        this.INNER_SQUARE_SIZE = Math.round(Math.sqrt(gridSize));
    }

    checkGrid(grid, position, number) {

        // Check hline
        let hlineOk = true;
        for (let i = 0; i < this.GRID_SIZE; i++) {
            hlineOk = hlineOk && (grid[position.y][i] !== number);
        }
    
        // Check vline
        let vlineOk = true; 
        for (let i = 0; i < this.GRID_SIZE; i++) {
            vlineOk = vlineOk && (grid[i][position.x] !== number);
        }
    
        // Check Square
        let squareOk = true;
        const squareXStart = Math.trunc(position.x / this.INNER_SQUARE_SIZE) * this.INNER_SQUARE_SIZE;
        const squareYStart = Math.trunc(position.y / this.INNER_SQUARE_SIZE) * this.INNER_SQUARE_SIZE;
    
        for (let x = 0; x < this.INNER_SQUARE_SIZE; x++) {
            for (let y = 0; y < this.INNER_SQUARE_SIZE; y++) {
                squareOk = squareOk && (grid[squareYStart+y][squareXStart+x] !== number);
            }
        }
    
        return squareOk && vlineOk && hlineOk;
    }
    
    holesCompare(hole1, hole2) {
        return (hole1.possibilities.length - hole2.possibilities.length);
    }
    
    solver(grid) {
    
        const workGrid = JSON.parse(JSON.stringify(grid));
        let gridModified = false;
        const holes = [];
    
        // Step 1 : search each hole
        for (let x = 0; x < this.GRID_SIZE; x++) {
            for (let y = 0; y < this.GRID_SIZE; y++) {
                if (grid[y][x] === null) {
                    holes.push({x, y, possibilities: []});
                }
            }
        }
    
        // Step 1bis : Nothing to do ? Exit (for recursion)
        if (holes.length == 0) {
            return grid;
        }
    
        // NB : From that point, work only with workGrid
    
        // Step 2 : for each hole, enumerate possibilities
        for (let i = 0; i < holes.length; i++) {
            for (let number = 1; number <= this.GRID_SIZE; number++) {
                if (this.checkGrid(workGrid, holes[i], number)) {
                    holes[i].possibilities.push(number);
                }
            }
            // If one hole has no possitibility > The grid is a failure
            if (holes[i].possibilities.length === 0) {
                return null;
            }
        }
    
        // Step 3 : Fill hole with only 1 possibility
        for (let i = 0; i < holes.length; i++) {
            if (holes[i].possibilities.length === 1) {
                if (this.checkGrid(workGrid, holes[i], holes[i].possibilities[0])) {
                    workGrid[holes[i].y][holes[i].x] = holes[i].possibilities[0];
                    gridModified = true;
                }
                else {
                    // 2 obvious possibility exlude themselves
                    return null;
                }
            }
        }
    
        // Step 4 : Repeat until no more obvious hole
        if (gridModified) {
            return this.solver(workGrid);
        }
    
        // Order holes on possibilities length
        holes.sort(this.holesCompare);
    
        // Try one possibility and recurse
        for (let i = 0; i < holes.length; i++) {
            const tryGrid = JSON.parse(JSON.stringify(workGrid));
    
            for (let possibility = 0; possibility < holes[i].possibilities.length; possibility++) {
                if (this.checkGrid(tryGrid, holes[i], holes[i].possibilities[possibility])) {
                    tryGrid[holes[i].y][holes[i].x] = holes[i].possibilities[possibility];
                    
                    let finalGrid = this.solver(tryGrid);
                    if (finalGrid != null) {
                        // It's over
                        return finalGrid;
                    }
                    else {
                        tryGrid[holes[i].y][holes[i].x] = null;
                    }
                    // Try next possibility
                }
            }
    
            // no possibility fits for this hole !!
            return null;
        }
    
        // Should never be there
        throw `Should never end function here for grid ${JSON.stringify(workGrid)}`;
    }
    
    giveMeOneHint(grid) {
        const finalGrid = this.solver(grid);
        const holes = [];
    
        if (finalGrid === null) {
            return null;
        }
    
        // Step 1 : search each hole
        for (let x = 0; x < this.GRID_SIZE; x++) {
            for (let y = 0; y < this.GRID_SIZE; y++) {
                if (grid[y][x] === null) {
                    holes.push({x, y});
                }
            }
        }
        
        // Select a hole that will be given as an hint
        const hintHole = Math.trunc(Math.random() * holes.length);
    
        return {x: holes[hintHole].x, y: holes[hintHole].y, number: finalGrid[holes[hintHole].y][holes[hintHole].x]};
    }
    
    // Permet de créer plus facilement une grille de Sudoku à partir d'une chaine contenant tous les chiffres à la suite (et un autre caractère que 1-9 pour les trous)
    stringToGrid(chaine) {
        const grid = [];
        let pos = 0;
    
        if (chaine.length != this.GRID_SIZE*this.GRID_SIZE) {
            return null;
        }
    
        for (let x = 0; x < this.GRID_SIZE; x++) {
            let line = [];
            for (let y = 0; y < this.GRID_SIZE; y++) {
                const num = parseInt(chaine.charAt(pos++), (this.GRID_SIZE+1));
                if (num > 0) line.push(num);
                else line.push(null);
            }
            grid.push(line);
        }
    
        return grid;
    }
    
    generateGrid(numToFill) {
        const grid = [];
        let pos = 0;
    
        // Empty Grid
        for (let x = 0; x < this.GRID_SIZE; x++) {
            let line = [];
            for (let y = 0; y < this.GRID_SIZE; y++) {
                line.push(null);
            }
            grid.push(line);
        }
    
        let numbers = 0;
        while (numbers < numToFill) {
    
            // TODO : 20 can be broken > 17?
            if (numbers < 25) {
                const x = Math.floor(Math.random() * this.GRID_SIZE);
                const y = Math.floor(Math.random() * this.GRID_SIZE);
                const number = 1 + Math.floor(Math.random() * this.GRID_SIZE);
    
                if ((grid[y][x] === null) && (this.checkGrid(grid, {x, y}, number))) {
                    grid[y][x] = number;
                    numbers++
                }
            }
            else {
                const hint = this.giveMeOneHint(grid);
                if (hint !== null) {
                    grid[hint.y][hint.x] = hint.number;
                    numbers++;
                }
            }
        }
    
        // Vérification
        if (this.solver(grid)) {
            return grid;
        }
        else {
            throw 'Grid is broken';
        }
    }
    
}

export { Sudoku };

