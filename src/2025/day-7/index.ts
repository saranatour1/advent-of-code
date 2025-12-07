import { readFileSync } from 'node:fs';

export const day_7 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The grand total", result)

  const result2 = part2();
  console.log("Part 2: The grand total", result2)
}

const example = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`




const part1 = () => {
  const file = readFileSync('./src/2025/day-7/input.txt', 'utf-8')
  const lines = example.split('\n').map(t => t.split(''));
  let splits = 0;

  let queue:string[] = [];
  for(const line of lines){
    queue.push(line.join());
    for(const char of line){

    }
  }
}

const part2 = () => {
  const file = readFileSync('./src/2025/day-7/input.txt', 'utf-8');

  const lines = example.split('\n').map(i=> i.split(""));

    const splitters = new Set(
    lines.flatMap((row, y) =>
      row
        .map((c, x) => (c === "^" ? `${x},${y}` : null))
        .filter(Boolean) as string[]
    )
  )
   
  const startX = lines[0].findIndex(c => c === "S");
  let splits = 0;

  const queue:{x:number, y:number}[] =[];

  console.log(splitters)
  while(queue.length>0){

  }  
};
