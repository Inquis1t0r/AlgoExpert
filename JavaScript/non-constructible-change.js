function nonConstructibleChange(coins) {
  // Write your code here.

  coins.sort((a, b) => a - b);

  let res = 1;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > res) {
      break;
    }
    res += coins[i];
  }

  return res;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
