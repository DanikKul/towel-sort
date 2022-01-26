
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
        return [];
    }
    let arr = [];
    let ind = 0;
    for (let i = 0; i < matrix.length; i++){
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr[ind] = matrix[i][j];
                ind++;
            }
        } else{
            for (let j = 0; j < matrix[i].length; j++) {
                arr[ind] = matrix[i][matrix[i].length - 1 - j];
                ind++;
            }
        }
    }
    return arr;
}
