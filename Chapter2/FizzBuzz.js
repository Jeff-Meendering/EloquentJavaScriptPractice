/*
Use console.log to print all the numbers fro 1 to 100.
For numbers divisible by 3, print "Fizz" instead of the number and for numbers divisible by 5, print "Buzz", 
For numbers divisible by 3 and 5, print "FizzBuzz"
*/

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) { // Same as (i % 15 == 0)
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}