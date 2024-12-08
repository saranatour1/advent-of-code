import { readFileSync } from "node:fs";

export const day8 = () => {
  const file = readFileSync("./src/2024/day-8/input.txt").toString();

  const map: string[][] = file.split("\r\n").map((line) => line.split("")); // grid map

  // get the places where the map has an (a) or (A)
  const antennas: Record<"a" | "A" | '0', { x: number; y: number }[]> = { a: [], A: [] , 0:[]};

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      let c = map[i][j];
      if (c === "a") {
        antennas.a.push({ x: i, y: j });
      }
      if (c === "A") {
        antennas.A.push({ x: i, y: j });
      }
      if(c==='0'){
        antennas[0].push({ x: i, y: j })
      }
    } 
  }
  
  
  console.log(antennas)
};


