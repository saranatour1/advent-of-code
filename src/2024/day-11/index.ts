import { readFileSync } from "node:fs";

export const day11 = () => {
  const file = readFileSync('./src/2024/day-11/input.txt').toString();

  const initialValue = file.split(' ').map(Number); 
  const targetBlink = 25;


  let queue = [...initialValue];

  for (let i = 1; i <= targetBlink; i++) {
    const nextQueue = [];
    for (const value of queue) {
      if (value === 0) {
        nextQueue.push(1);
      } else if (Math.floor(Math.log10(value) + 1) % 2 === 0) {

        const [left, right] = splitNumber(value);
        nextQueue.push(left, right);
      } else {
        nextQueue.push(value * 2024);
      }
    }
    queue = nextQueue;
  }

  console.log("after", queue.length*2);
};

function splitNumber(input: number): [number, number] {
  const digits = Math.floor(Math.log10(input) + 1); 
  const divisor = Math.pow(10, Math.floor(digits / 2));
  const left = Math.floor(input / divisor);
  const right = input % divisor;

  return [left, right];
}
