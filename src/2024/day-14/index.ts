import { readFileSync } from "node:fs";

const WIDTH = 101;
const HEIGHT = 103;
const file = readFileSync("./src/2024/day-14/input.txt").toString();
export const day14 = () => {
  const grid = file.split("\r\n").map((line) => line.split(" "));

  // positions and velocities
  const robots = grid.map((line) => {
    const [, p] = line[0].split("=");
    const [px, py] = p.split(",").map(Number);

    const [, v] = line[1].split("=");
    const [vx, vy] = v.split(",").map(Number);
    return [px, py, vx, vy]
  });

  const t = 100;

  const quads = [0,0,0,0]
  for(let i =1; i<=t; i++){
    for (const index in robots) {
      const [px, py, vx, vy] = robots[index];
      const pxA = (px +( vx)) % WIDTH;
      const pyA = (py +( vy)) % HEIGHT;
      robots[index] = [pxA, pyA, vx, vy];
      
      while(robots[index][0] < 0) robots[index][0] += WIDTH
      while(robots[index][1] < 0) robots[index][1] += HEIGHT
    }
  }

  const cW = Math.floor(WIDTH/2)
  const cH = Math.floor(HEIGHT/2)
  for (const r of robots) {
      if (r[0] < cW && r[1] < cH) quads[0]+=1
      if (r[0] > cW && r[1] < cH) quads[1]+=1
      if (r[0] < cW && r[1] > cH) quads[2]+=1
      if (r[0] > cW && r[1] > cH) quads[3]+=1
  }

  const total = quads.reduce((prev,curr)=>prev*curr,1)
  console.log(total);
}; 
