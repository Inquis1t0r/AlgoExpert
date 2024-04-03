function getNthFib(n) {
  //TODO -> Fix test cases
    if (n <= 1) {
        return n;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
