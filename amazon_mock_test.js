/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    // if(grid[0][0] == 2){
    //     if(grid[])
    // } else{
    //     return -1
    // }
    // let matrix = Array.from(grid).map(x=>[...x]);
    let matrix = grid;
    console.log(matrix);
    console.log("Round starts");
    let mat_copy = Array.from(grid).map(x => [...x]);
    // mat_copy[0][0] = 2;
    // console.log(mat_copy)
    // console.log(matrix);
    let incrementer = 0;

    let rotten = [];
    let new_diag = [];
    // var plus_i_j;
    // var minus_i_j;
    // var i_plus_j;
    // var i_minus_j;

    function checkRotten() {
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (matrix[x][y] == 2) {
                    findDiagonal(x, y);
                    changeDiagVal()
                }
            }
        }
        console.log(new_diag);
        // console.log(rotten);
    }

    function findDiagonal(x, y) {
        let plus_i_j = matrix[x + 1][y];
        let minus_i_j = matrix[Math.max(0, x - 1)][y];
        let i_plus_j = matrix[x][y + 1];
        let i_minus_j = matrix[x][Math.max(0, y - 1)];
        console.log(plus_i_j)
        console.log(minus_i_j)
        console.log(i_plus_j)
        console.log(i_minus_j)
        if (plus_i_j != 0 && plus_i_j == 1 && plus_i_j !== matrix[x][y]) {
            // mat_copy[i+1][j] = 2;
            new_diag.push([x + 1, y]);
        }
        // Math.max(0, i - 1)
        if (minus_i_j != 0 && minus_i_j == 1 && minus_i_j !== matrix[x][y]) {
            // mat_copy[Math.max(0, i - 1)][j]=2
            new_diag.push([Math.max(0, x - 1), y]);
        }
        if (i_plus_j != 0 && i_plus_j == 1 && i_plus_j !== matrix[x][y]) {
            // mat_copy[i][j+1]=2
            new_diag.push([x, y + 1]);
        }
        if (i_minus_j != 0 && i_minus_j == 1 && i_minus_j !== matrix[x][y]) {
            // mat_copy[i][Math.max(0, j - 1)]=2
            new_diag.push([x, Math.max(0, y - 1)]);
        }
    }

    function nextDiagonal(){
        // new_diag=[];
        for (let x = 0; x < new_diag.length; x++) {
            // for (let y = 0; y < new_diag.length; y++) {
                console.log(new_diag[x][0], new_diag[x][1])
                findDiagonal(new_diag[x][0], new_diag[x][1]);
                // }
            }
            console.log(new_diag);
    }

    function changeDiagVal() {
        for (let i = 0; i < new_diag.length; i++) {
            // for (j = 0; j < 2; j++) {
            // let x = diagonal_val[i]
            // console.log("=====" + matrix[diagonal_val[i][0]][diagonal_val[i][1]]);
            if (matrix[new_diag[i][0]][new_diag[i][1]] == 1) {
                mat_copy[new_diag[i][0]][new_diag[i][1]] = 2;
            }
        }
        // if(diagonal_val)
        console.log(mat_copy);
        console.log(matrix);
        // console.log(incrementer);
    }
    
    checkRotten();
    for (let i = 1; i <= 3; i++) {
        console.log("round " + i);
        matrix=Array.from(mat_copy).map(x=>[...x]);
        nextDiagonal()
        changeDiagVal();
        // new_diag = [];
        // matrix[0][0]=4;
        console.log(matrix);
        console.log(mat_copy);
    }
};

orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [1, 1, 1]
]);