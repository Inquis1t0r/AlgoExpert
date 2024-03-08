function transposeMatrix(matrix) {
  // Write your code here.
  const switchedArr = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

    for (let i = 0; i < cols; i++) {
      switchedArr.push(new Array(rows).fill(null));
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          switchedArr[j][i] = matrix[i][j];
      }
    }
  
  return switchedArr;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
