/*
Analogous to the some method, arrays also have an every method. This one returns true when the given
function returns true for every elemet in the array. In a way, some is a version of the || operator
that acts on arrays, and every is like the && operator. 
Implement every as a function that takes an array and a predicate function as parameters. Write two 
versions, one using a loop and one using the some method.
*/

everyWithLoop = (array, predicate) => {
    for (let element of array) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}

function everyWithSome(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(everyWithLoop([2, 4, 6], n => n % 2 === 0)); //true
console.log(everyWithSome([2, 4, 6], n => n % 2 === 0)); //true
console.log(everyWithLoop([2, 4, 5], n => n % 2 === 0)); //false
console.log(everyWithSome([2, 4, 5], n => n % 2 === 0)); //false
