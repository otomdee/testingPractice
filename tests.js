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