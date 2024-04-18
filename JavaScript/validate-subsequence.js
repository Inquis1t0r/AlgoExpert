function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIndex = 0;
  let subPointer = sequence[seqIndex];


  for (let i = 0; i < array.length; i++) {
    if(array[i] == subPointer){
      seqIndex++;
      console.log('match: ', array[i], subPointer);
    }
  }
  console.log(seqIndex);
  console.log(sequence.length);
return seqIndex == sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
