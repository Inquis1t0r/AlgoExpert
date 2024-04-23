function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(function (x) {
    return Math.pow(x, 2);
  }).sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
