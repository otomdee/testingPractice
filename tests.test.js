import {
    capitalize,
    reverseString
} from "./tests.js";

test('capitalize', () => {
    expect(capitalize("book")).toBe("Book");
})

test('reverse', () => {
    expect(reverseString("goat")).toBe("taog");
})