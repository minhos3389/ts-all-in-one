const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

// 💩 One of the main goals of TypeScript is to minimize the use of the 'any' type and improve code stability and readability through clear type definitions.
const f: any = true;

// function add(x: number, y: number): number {
//   return x + y;
// }
// const add = (x: number, y: number): number => x + y;

// object
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// type alias
type Add1 = (x: number, y: number) => number;
const add1: Add1 = (x, y) => x + y;

// interface
interface Add2 {
  (x: number, y: number): number;
}
const add2: Add2 = (x, y) => x + y;

const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456]; // generic
const arr4: [number, number, string] = [123, 456, "789"]; // tuple

const happy: true = true; // only true type
