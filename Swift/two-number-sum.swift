class Program {
  func twoNumberSum(_ array: inout [Int], _ targetSum: Int) -> [Int] {
    // Write your code here.
        var result = [Int]()

    for i in 0..<array.count - 1 {
        for j in i + 1..<array.count {
            if array[i] + array[j] == targetSum {
                result.append(array[i])
                result.append(array[j])
                return result
            }
        }
    }
    return []
  }
}
