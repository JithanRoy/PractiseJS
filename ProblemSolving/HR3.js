function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0;
    let diag2 = 0;
    for( let i = 0; i < arr.length; i++ ) {
        for( let j = 0; j < 3; j++) {
            if(i === j) {
                diag1 += arr[i][j];
            } 
        }
    }
    let k = arr.length - 1;
    for( let i = 0; i < arr.length; i++) {
        
        if( k !== -1 ) {
            diag2 += arr[i][k];
            k--;
        }
    }
    return Math.abs(diag1 - diag2);
}

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

const result = diagonalDifference(arr);

