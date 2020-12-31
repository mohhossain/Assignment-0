function setUnionOfAnyAmountOfSets(...args) {
    // Insert code here;
    let merge = []
    for (let i in args) {
        merge = merge.concat([...args[i]])
    }

    //merge = merge.concat(...args);
    let union = new Set(merge);
    return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;