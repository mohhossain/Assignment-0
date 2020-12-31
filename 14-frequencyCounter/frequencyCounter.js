function frequencyCounter(word) {
  // Insert code here;
    let counter = {}
    for (let i = 0; i < word.length; i++) {
        counter[word[i]] = (counter[word[i]] || 0) + 1;
    }
    return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;