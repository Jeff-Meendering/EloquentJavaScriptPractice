/*
Write a function deepEqual that takes two values and return true only if they are the same value or
are objects with the same properties, where the values of the properties are equal when compared with
a recursive call to deepEqual.
*/

deepEqual = (a, b) => {
    if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  
      if (keysA.length !== keysB.length) {
        return false;
      }
  
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
  
      return true;
      
    } else {
      return a === b;
    }
  }

console.log(deepEqual(1,1)); //true
console.log(deepEqual(3,1)); //false
console.log(deepEqual(4,40)); //false
console.log(deepEqual(500.5,500.5)); //true