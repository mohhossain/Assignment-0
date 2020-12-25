function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
    let newArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === start) {
            newArr = nums.slice(i);
        } else if (nums[i] === end) {
            newArr = newArr.slice(0, i + 1);
        }
        
    }
    return newArr.length;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;