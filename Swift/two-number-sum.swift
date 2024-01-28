class Program {
  func twoNumberSum(_ array: inout [Int], _ targetSum: Int) -> [Int] {
    // Write your code here.
    var result = [Int]()

    for i in 0..<array.count - 1 {
          var valueToCheck = targetSum - array[i];
          if (array.contains(valueToCheck) && valueToCheck != array[i]){
                result.append(array[i])
                result.append(valueToCheck)
                return result
            }
    }
    return []
  }
}
