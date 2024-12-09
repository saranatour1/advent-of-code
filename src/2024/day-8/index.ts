import { readFileSync } from "node:fs";

const file = readFileSync("./src/2024/day-8/input.txt").toString();

const map: string[][] = file.split("\r\n").map((line) => line.split("")); // grid map
export const day8 = () => {
  // get the places where the map has an (a) or (A)
  // const antennas: Record<"a" | "A" | '0', { x: number; y: number }[]> = { a: [], A: [] , 0:[]};
  const antennas: Record<string, [number, number][]> = {};

  const antinode = new Set();

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      let c = map[i][j];
      if (c !== ".") {
        if (!antennas[c]) {
          antennas[c] = [];
        }
        antennas[c].push([i, j]);
      }
    }
  }
  
  for(const frequency in antennas){
    const char = antennas[frequency]
    for (let i = 0; i < char.length; i++) {
      for (let j = i + 1; j < char.length; j++) {
        const [x1, y1] = char[i], [x2, y2] = char[j];
        const dx = x2 - x1, dy = y2 - y1;
        const a1: [number, number] = [x1 - dx, y1 - dy], a2: [number, number] = [x2 + dx, y2 + dy];
        
        if (isInBounds(a1[0], a1[1])) antinode.add(a1.join(','));
        if (isInBounds(a2[0], a2[1])) antinode.add(a2.join(','));
      }}
  }

  console.log("Part 1:", antinode.size);
}; 

function isInBounds(x: number, y: number) {
  return x >= 0 && y >= 0 && x < map[0].length && y < map.length;
}
