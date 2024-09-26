export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}

export function reverseString(string) {
    let revString = "";
    for(let i = 0; i < string.length; i++) {
        revString = revString.concat(string[string.length - 1 - i]);
    }
    return revString;
}

export const calculator = {
    add : (a,b) => {
        return a + b;
    },
    subtract: (a,b) => {
        return a - b;
    },
    divide: (a,b) => {
        return a / b;
    },
    multiply: (a,b) => {
        return a * b;
    }
}

export function caesarCipher(string, key) {
    let cipher = "";
    for (let i = 0; i < string.length; i++) {
        cipher = cipher.concat(shiftChar(string[i], key));
    }
    return cipher;
}

export function analyzeArray(array) {
    //average
    let average = 0;
    let min = array[0];
    let max = array[0];
    array.forEach((item) => {
        average += item;
        if (item < min) {
            min = item;
        }
        if (item > max) {
            max = item;
        }
    })
    average = Math.floor(average/array.length);
    return {
        average: average,
        min: min,
        max: max,
        length: array.length
     };
}

function shiftChar(char, key) {
    let charCode = char.charCodeAt(0);

    // Check if the character is lowercase
  if (char >= 'a' && char <= 'z') {
    return String.fromCharCode(((charCode - 97 + key) % 26) + 97);
  }
  else if (char >= 'A' && char <= 'Z') {
    return String.fromCharCode(((charCode - 65 + key) % 26) + 65);
  } else {
    // If not an alphabet, return the character as is
    return char;
  }
}