function productOfAnyAmountOfNumbers(...args) {
    // Insert code here;
    let prod = 1;
    for (let i of args) {
        prod *= i;
    }
    return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;