import { readFileSync } from "node:fs"

const map= readFileSync('./src/2024/day-10/input.txt').toString().split('\r\n').map(line => line.split('').map(Number));

export const day10=()=>{
  let trailHeads: number[][] = [];
  map.forEach((row, y) =>
    row.forEach((height, x) => {
      if (height === 0) {
        trailHeads.push([x, y, x, y, height]);
      }
    })
  );
  const paths = new Set<string>();

  while (trailHeads.length > 0) {
    const [startX, startY, x, y, height] = trailHeads.pop()!;
    if (height === 9) {
      paths.add(`${startX},${startY},${x},${y}`);
      continue;
    }

    if (x > 0 && map[y][x - 1] === height + 1) {
      trailHeads.push([startX, startY, x - 1, y, height + 1]);
    }
    if (x < map[0].length - 1 && map[y][x + 1] === height + 1) {
      trailHeads.push([startX, startY, x + 1, y, height + 1]);
    }
    if (y > 0 && map[y - 1][x] === height + 1) {
      trailHeads.push([startX, startY, x, y - 1, height + 1]);
    }
    if (y < map.length - 1 && map[y + 1][x] === height + 1) {
      trailHeads.push([startX, startY, x, y + 1, height + 1]);
    }
  }
  console.log(paths.size);
}
