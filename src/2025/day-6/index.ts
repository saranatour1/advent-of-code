import { readFileSync } from 'node:fs';

export const day_6 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The grand total", result)

  const result2 = part2();
  console.log("Part 1: The grand total", result2)
}

const example = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

  const flipVertical = (arr: string[][]) =>
    arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));

  const part1 = () => {
  const file = readFileSync('./src/2025/day-6/input.txt', 'utf-8')
  const lines = file.split('\n').map(all => all.trim().split(' ').filter(Boolean));

  // get the virtical length

  const flipped = flipVertical(lines)

  let totalMath: number = 0

  for (const line of flipped) {
    const vLength = line.length
    const mathArithmetic = line[vLength - 1]
    line.pop()
    let lineTotal = line.reduce((prev, curr) => {
      // console.log(curr)
      return mathArithmetic === "+" ? prev + Number(curr) : prev * Number(curr)
    }, mathArithmetic === "+" ? 0 : 1)

    totalMath += lineTotal
  }

  return totalMath
}

const part2 = () => {
  const file = readFileSync('./src/2025/day-6/input.txt', 'utf-8')


}
