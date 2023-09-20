/*
Write a function called countBs that takes a string as its only argument and returns a number that
indicates how many uppercase "B" characters there are in the string. Next, write a function called countChar
that behaves like countBs, except it takes a second argument that indicates the character that is to be counted.
Rewrite countBs to make use of this new function.
*/

const countBs = (str) => {
    return countChar(str, 'B');
}

const countChar = (str, char) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    return count;
}

console.log(countBs("BBBbbbasdfHello World!")); //3
console.log(countChar("Hello World!", 'l')); //3