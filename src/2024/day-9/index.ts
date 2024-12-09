import { readFileSync } from "node:fs";

export const day9 = () => {
  const file = readFileSync("./src/2024/day-9/input.txt").toString().split("").map(Number);

  // odd = file numbers
  // even = empty spaces
  let diskMap = [],
    id = 0;
  for (let i = 0; i < file.length; i++) {
    let temp = Array.from({ length: file[i] }).fill(i % 2 == 0 ? id : ".");
    diskMap.push(...temp);
    if (i % 2 == 0) id++;
  }

  for (let i = diskMap.length - 1; i >= 0; i--) {
    if (diskMap[i] == "." || diskMap.indexOf(".") > i) continue;
    [diskMap[diskMap.indexOf(".")],diskMap[i]] = [diskMap[i], "."];
  }

  let checksum = diskMap
    .filter((num) => num != ".")
    .map(Number)
    .reduce((prev, curr, index, arr) => prev + curr * index, 0);

  console.log("Part1", checksum); // 6349606724455
};
