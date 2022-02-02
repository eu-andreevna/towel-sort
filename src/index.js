
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix == false) return []; 

  let resultMatr = [];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let direction = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
      resultMatr.push(matrix[i][direction]);
    }
    
  }

  return resultMatr;
}
