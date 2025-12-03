import { createReadStream, readFileSync } from 'node:fs';
import readline, { createInterface } from 'node:readline';

export const day_3 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: Total Joltage:", result)

  const result2 = part2();
  console.log("Part 2:  Invalid Id's now are", result2)

}

const example = `987654321111111
811111111111119
234234234234278
818181911112111`

const part1 = () => {
  const file = readFileSync('./src/2025/day-3/input.txt', 'utf-8')
  const lines = file.split('\n');

  const wins = new Array<number>()

  for (const element of lines) {
    const pairs = getAllPairs(element.split('').map(t => Number(t))).map(t => Number(t.join('')))
    const maxim = Math.max(...pairs)
    wins.push(maxim)
  }
  return wins.reduce((prev, curr) => prev + curr, 0)
}

function getAllPairs(nums: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result.push([nums[i], nums[j]]);
    }
  }

  return result;
}


const part2 = () => {
  const file = readFileSync('./src/2025/day-3/input.txt', 'utf-8')
  const lines = example.split('\n');

  for(const line of lines){
    const stuff = goThrough12(line)
  }
}

const goThrough12 =(line:string)=>{
  const seen = new Set<number>();
  const numberOfWindow = Math.floor(line.length/12);

  let nextIndex = 0;

  for(const l in line.split('')){
    nextIndex = Number(l)+12;
    
  }
}

