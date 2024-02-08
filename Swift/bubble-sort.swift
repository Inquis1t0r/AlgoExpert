class Program {
  func bubbleSort(array: inout [Int]) -> [Int] {
      for i in 0..<array.count {
          for j in 0..<(array.count - 1 - i) {
              if array[j] > array[j + 1] {
                  array.swapAt(j, j + 1)
              }
          }
      }
      return array
  }
}

