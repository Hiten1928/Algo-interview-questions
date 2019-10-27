// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let count = 1

  let currColum,
    startColumn = 0,
    startRow = 0,
    endRow = n - 1,
    endColumn = n - 1

  while (startColumn <= endColumn && startRow <= endRow) {
    //Top row
    for (let j = startColumn; j <= endColumn; j++) {
      results[startRow][j] = count
      count++
    }
    startRow++
    //Right column
    for (let k = startRow; k <= endRow; k++) {
      results[k][endColumn] = count
      count++
    }
    endColumn--
    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = count
      count++
    }
    endRow--
    //1st Row back
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = count
      count++
    }
    startColumn++
  }
  return results
}

module.exports = matrix
