function fizzBuzz(start, end){
    // Insert code here;
    let arr = new Array();
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push( "FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push ("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
        
    }
    return arr;
    console.log(arr);
}

fizzBuzz(1, 5)



// Do not edit this line;
module.exports = fizzBuzz;