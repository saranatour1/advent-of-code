import { puzzleInputDay2 } from "./input";
export const day2 = () => {
  let data = puzzleInputDay2.split("\n");
  let numbers: number[][] = [];
  let safeCounter = 0;
  let unsafeCounter = 0;
  let someHowSafe = 0;

  for (const numberLines of data) {
    let line = numberLines.match(/\d+/g);
    const definedType = line?.map(Number) as number[];
    numbers.push(definedType);
  }
  // checking here
  for (const level of numbers) {
    if (isSafe(level)) {
      safeCounter++;
    }
  }

  console.log("Part1:", safeCounter);
  console.log("Part2:",someHowSafe)
};


const isSafe = (level:number[])=>{
  let steps: number[] = [];
  for (let i = 1; i < level.length; i++) {
    steps.push(level[i] - level[i - 1]);
  }

  const increasing = steps.every((n) => n > 0 && n <= 3);
  const decreasing = steps.every((n) => n < 0 && n >= -3);
  return increasing || decreasing;
}
