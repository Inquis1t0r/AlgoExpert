function firstNonRepeatingCharacter(string) {
  // Write your code here.
  for (let letter of string) {
    let isDuplicated = string.indexOf(letter) !== string.lastIndexOf(letter);
      if (!(isDuplicated)) {
        return string.indexOf(letter);
      }
  }
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
