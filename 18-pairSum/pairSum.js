function pairSum(nums, target) {
    if (nums.length <= 1) {
        throw "error"
    }
    // Insert code here;
    let findsum = new Set();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let compliment = target - num;
        if (findsum.has(compliment)) {
            return true;
        }
        findsum.add(num)
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;