import { readFileSync } from "node:fs";

// page ordering rules +  pages to produce in each update
export const day5 = () => {
  const file = readFileSync("src/2024/day-5/input.txt").toString();
  
  const orderingRules = file
    .split("\r\n")
    .map((line) => (line.includes("|") ? line.split("|") : null))
    .filter((item) => item != null);

  const updates = file
    .split("\r\n")
    .map((line) => (line.includes(",") ? line.split(",") : null))
    .filter((line) => line != null);

  const rules: Map<number, number[]> = new Map();
  orderingRules.forEach((line) => {
    const [left, right] = line.map((num) => parseInt(num, 10));
    if (rules.get(right) === undefined) rules.set(right, []);
    if (rules.get(left) === undefined) rules.set(left, []);
    rules.get(right)?.push(left);
  });

  const totalPart1 = updates.reduce((sum, line) => {
    const numbersInLine = line.map((num) => parseInt(num, 10));
    let isValid = true;
    for (let i = 1; i < numbersInLine.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (!rules.get(numbersInLine[i])?.includes(numbersInLine[j])) isValid = false;
      }
    }
    return sum + (isValid ? numbersInLine[Math.floor(numbersInLine.length / 2)] : 0);
  }, 0);

  const totalPart2 = updates.reduce((sum, line) => {
    const numbersInLine = line.map((num) => parseInt(num, 10));
    let isValid = true;
    for (let i = 1; i < numbersInLine.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (!rules.get(numbersInLine[i])?.includes(numbersInLine[j])) isValid = false;
      }
    }

    if (!isValid) {
      numbersInLine.sort(
        (a, b) =>
          rules.get(a)!.filter((num) => numbersInLine.includes(num)).length -
          rules.get(b)!.filter((num) => numbersInLine.includes(num)).length
      );
      sum += numbersInLine[Math.floor(numbersInLine.length / 2)];
    }

    return sum;
  }, 0);

  console.log("Part1:", totalPart1);
  console.log("Part2:", totalPart2);
};
