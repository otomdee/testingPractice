import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
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

test("analyze array average", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
})

test("analyze array min", () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
})

test("analyze array max", () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
})

test("analyze array length", () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
})