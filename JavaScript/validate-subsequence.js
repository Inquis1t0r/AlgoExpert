function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length){
    if(array[arrIdx] == sequence[seqIdx]){
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx == sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
