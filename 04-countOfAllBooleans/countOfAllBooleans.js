function countOfAllBooleans(arr) {
  // Insert code here;
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'boolean') {
            count += 1;
        }
    }

    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;