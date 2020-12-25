function isPalindrome(word) {
  // Insert code here;
    if (word.length === 1) {
        return true;
    } else if (word.length === 2) {
        return word[0] === word[1];
    } else if (word[0] === word.slice(-1)) {
        return isPalindrome(word.slice(1, -1))
    } else {
        return false;
    }
}

// Do not edit this line;
module.exports = isPalindrome;