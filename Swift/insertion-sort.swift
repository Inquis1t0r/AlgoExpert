class Program {
  func insertionSort(array: inout [Int]) -> [Int] {
  var sortedArray = array
  for i in 1..<sortedArray.count {
    var key = sortedArray[i]
    var j = i - 1
    while j >= 0 && sortedArray[j] > key {
      sortedArray[j + 1] = sortedArray[j]
      j -= 1
    }
    sortedArray[j + 1] = key
  }
  return sortedArray
  }
}
