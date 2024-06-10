function binarySearch(array, target) {
    // Write your code here.
    let low = array[0];
    let high = array[array.length - 1];
    let result = -1;
    while (low <= high) {
        let mid = (low + high) / 2;

        if (array[mid] == target) {
            result = mid;
        }

        if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }


    }

    return result;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
