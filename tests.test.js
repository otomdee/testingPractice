import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
} from "./tests.js";

test('capitalize', () => {
    expect(capitalize("book")).toBe("Book");
})

test('reverse', () => {
    expect(reverseString("goat")).toBe("taog");
})

test("add", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("subtract", () => {
    expect(calculator.subtract(3,1)).toBe(2);
})

test("divide", () => {
    expect(calculator.divide(6,3)).toBe(2);
})

test("multiply", () => {
    expect(calculator.multiply(100,2)).toBe(200);
})

test("cipher", () => {
    expect(caesarCipher("cooking", 3)).toBe("frrnlqj");
})

test("cipher wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("cipher case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("cipher case preservation", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})