type Cb = (a: number, b: number) => number;

const plus = (a: number, b: number): number => a + b
const minus = (a: number, b: number): number => a - b
const multi = (a: number, b: number): number => a * b
const calc = (a: number, b: number, cb: Cb): number => cb(a, b)

// console.log(calc(5, 6, plus));
// console.log(calc(5, 6, minus));
// console.log(calc(5, 6, multi));
// console.log(calc(5, 6, (a, b) => (a + b) * 2) + 100);

type Cb2 = (min: number, max: number) => any

const minMax = (arr: number[], cb: Cb2): any => cb(Math.min(...arr), Math.max(...arr))

const numbers: number[] = [1, 2, 3, -23, 44, 2, -3, 55, -10]

minMax(numbers, (min, max) => console.log(min, max))
console.log(minMax(numbers, (min, max) => ({min, max})));
console.log(minMax(numbers, (min, max) => [min, max]));
console.log(minMax(numbers, (min, max) => min + max));