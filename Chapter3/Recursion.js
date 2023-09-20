/*
Define a recursive funtion isEven corresponding to the following description...
- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.
The function should accept a single parameter and return a Boolean.
Test it on 50, 75 and -1.
*/

const isEven = (num) => {
    if (num < 0) num = -num;
    if (num % 2 == 0) {
        return true;
    } else if (num % 2 != 0) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(0)); //true
console.log(isEven(1)); //false
console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false