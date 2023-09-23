/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that
has the same elements in the inverse order. The second, reverseArrayInPlace, does
what the reverse method does: it modifies the array given as argument by revering
its elements. Neither may use te standard reverse method.
*/

reverseArray = arr => {
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

reverseArrayInPlace = arr => {
    let temp;
    for (let i = 0; i < ((arr.length-1)/2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

const testArr = [1, 2, 3, 4, 5];

console.log(reverseArray(testArr)); //[ 5, 4, 3, 2, 1 ]

console.log(reverseArrayInPlace(testArr)); //[ 5, 4, 3, 2, 1 ]