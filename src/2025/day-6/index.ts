import { readFileSync } from 'node:fs';

export const day_6 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The grand total", result)

  const result2 = part2();
  console.log("Part 2: The grand total", result2)
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

  const flipped = flipVertical(lines)

  let totalMath: number = 0

  for (const line of flipped) {
    const vLength = line.length
    const mathArithmetic = line[vLength - 1]
    line.pop()
    let lineTotal = line.reduce((prev, curr) => {
      return mathArithmetic === "+" ? prev + Number(curr) : prev * Number(curr)
    }, mathArithmetic === "+" ? 0 : 1)

    totalMath += lineTotal
  }

  return totalMath
}

const part2 = () => {
  const file = readFileSync('./src/2025/day-6/input.txt', 'utf-8');

  const lines = file.split('\n');
  const height = lines.length;
  const width = Math.max(...lines.map(l => l.length));

  const padded = lines.map(l => l.padEnd(width, " "));
  const columns: string[][] = Array.from({ length: width }, () => []);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      columns[x].push(padded[y][x]);
    }
  }

  const values: { data: number[], eq: string }[] = new Array()
  let index = 0;
  // on every empty line, we stop
  for (const line of columns) {
    if (line.length === 0 || line.every(c => c.trim() === "")) {
      index++;
      continue;
    }

    if (!values[index]) {
      values[index] = { data: [], eq: "*" };
    }

    const match = line.join("").match(/\d+/);
    if (match) {
      values[index].data.push(Number(match[0]));
    }

    if (line.includes("*")) {
      values[index].eq = "*";
    } else if (line.includes("+")) {
      values[index].eq = "+";
    }
  }

  return values.reduce((prev, curr) => {
    const d = curr.data.reduce((o, n) => {
      return curr.eq === "+" ? o + n : o * n
    }, curr.eq === "*" ? 1 : 0)

    return prev + d
  }, 0)
};
