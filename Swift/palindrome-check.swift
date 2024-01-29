class Program {
  func isPalindrome(string: String) -> Bool {
    // Write your code here.
    let length = string.count
    let middleIndex = length / 2

      for i in 0..<middleIndex {
        let frontIndex = string.index(string.startIndex, offsetBy: i)
        let backIndex = string.index(string.endIndex, offsetBy: -i - 1)
        
        if string[frontIndex] != string[backIndex] {
            return false
        }
  }
    
    return true
  }
}
