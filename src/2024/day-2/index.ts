import { puzzleInputDay2 } from "./input";
export const day2 = () => {
  let data = puzzleInputDay2.split("\n");
  let numbers: number[][] = [];
  let safeCounter = 0;
  let unsafeCounter = 0;

  for (const numberLines of data) {
    let line = numberLines.match(/\d+/g);
    const definedType = line?.map(Number) as number[];
    numbers.push(definedType);
  }
  // checking here
  for (const level of numbers) {
    let valid = false;
    let steps: number[] = [];
    for (let i = 1; i < level.length; i++) {
      steps.push(level[i] - level[i - 1]);
    }
    const increasing = steps.every((n) => n > 0 && n <= 3);
    const decreasing = steps.every((n) => n < 0 && n >= -3);
    valid = increasing || decreasing;
    if (valid) {
      safeCounter++;
    }
  }
  console.log("Part1:", safeCounter);
};
