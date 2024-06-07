function commonCharacters(strings) {
  // Write your code here.
    let commonChars = new Set(strings[0]);
  
    for (let i = 1; i < strings.length; i++) {
        let currentChars = new Set(strings[i]);
        commonChars = new Set([...commonChars].filter(char => currentChars.has(char)));
    }

    return [...commonChars];
}

// Do not edit the line below.
exports.commonCharacters = commonCharacters;
