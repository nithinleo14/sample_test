var orangesRotting = function orangesRotting(grid) {
    let matrix = grid;
    console.log("Round starts");
    console.log(matrix);
    console.log("Matrix printed");
    let mat_copy = Array.from(grid).map(x => [...x]);
    let incrementer = -1;
    let rotten = [];
    let new_diag = [];
    let result;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix.length; y++) {
            if (matrix[x][y] == 2) {
                rotten.push([x, y])
            }
        }
    }
    console.log('rotten')
    console.log(rotten);
    if (rotten.length == 0) {
        result = -1
    } else {
        function findDiagonal(x, y) {
            console.log('inside findDiagonal loop')
            let plus_i_j, minus_i_j, i_plus_j, i_minus_j
            try {
                plus_i_j = matrix[x + 1][y]
            } catch {
                plus_i_j = null
            }

            try {
                minus_i_j = matrix[Math.max(0, x - 1)][y]
            } catch {
                minus_i_j = null
            }

            try {
                i_plus_j = matrix[x][y + 1]
            } catch {
                i_plus_j = null
            }

            try {
                i_minus_j = matrix[x][Math.max(0, y - 1)]
            } catch {
                i_minus_j = null
            }
            if (plus_i_j != 0 && plus_i_j == 1 && plus_i_j !== matrix[x][y]) {
                matrix[x + 1][y] = 2;
                new_diag.push([x + 1, y]);
            }
            if (minus_i_j != 0 && minus_i_j == 1 && minus_i_j !== matrix[x][y]) {
                matrix[Math.max(0, x - 1)][y] = 2
                new_diag.push([Math.max(0, x - 1), y]);
            }
            if (i_plus_j != 0 && i_plus_j == 1 && i_plus_j !== matrix[x][y]) {
                matrix[x][y + 1] = 2
                new_diag.push([x, y + 1]);
            }
            if (i_minus_j != 0 && i_minus_j == 1 && i_minus_j !== matrix[x][y]) {
                matrix[x][Math.max(0, y - 1)] = 2
                new_diag.push([x, Math.max(0, y - 1)]);
            }
        }

        function nextDiagonal(x) {
            findDiagonal(rotten[x][0], rotten[x][1]);

        }

        while (rotten.length !== 0) {
            console.log('inside while loop');
            for (let x = 0; x < rotten.length; x++) {
                nextDiagonal(x)
            }
            console.log('new_diag');
            console.log(new_diag);
            console.log('final matrix');
            console.log(matrix);
            rotten = [];
            rotten = Array.from(new_diag).map(x => [...x]);
            new_diag = [];
            incrementer++;
        }
        console.log('Loop ended');

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (matrix[x][y] == 1) {
                    result = -1
                    break;
                } else {
                    result = incrementer;
                }
            }
        }
    }
    console.log(result)
    return result;
};

orangesRotting([
    [1, 2, 1],
    [1, 1, 1],
    [1, 0, 1]
]);