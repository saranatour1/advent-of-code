import { createReadStream, readFileSync } from 'node:fs';
import readline, { createInterface } from 'node:readline';

export const day_1 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The password =", result)
}

const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

const part1 = () => {
  const file = readFileSync('./src/2025/day-1/input.txt', 'utf-8')
  const lines = file.split('\n')

  // example lines 
  // const lines = example.split('\n')

  let password = 0;
  let currentRotation = 50;

  for (const line of lines) {
    const [, dir, amount] = line.match(/^([LR])(\d+)$/)!;
    if (dir === "L") {
      currentRotation = (currentRotation - Number(amount)) % 100
    } else { // "R"
    currentRotation = (currentRotation + Number(amount)) % 100
    }
    if(currentRotation === 0) password+=1
  }

  return password
}


