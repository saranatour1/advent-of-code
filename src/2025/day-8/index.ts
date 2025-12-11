import { readFileSync } from 'node:fs';

export const day_8 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The grand total", result)

  const result2 = part2();
  console.log("Part 2: The grand total", result2)
}

const example = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`

const part1 = () => {
  const file = readFileSync('./src/2025/day-8/input.txt', 'utf-8')
  const lines = example.split('\n').map(line => {
    const [x, y, z] = line.split(',')
    return [parseInt(x), parseInt(y), parseInt(z)]
  });
  
  const distances = new Map<string,number>();
  
  for(const line of lines){
    // grab all combonations
    for(let i=lines.indexOf(line)+1;i<=lines.length-1;i++){
      const q =lines[i]
      const shortest = findShortestDistance([line[0],line[1],line[2]],[q[0],q[1],q[2]])
      distances.set(`${line.join(",")}|${line.join(",")}`,shortest)
    }
  }

  const sorted = [...distances.entries()].sort((a,b)=> a[1]-b[1])
  
  const circuits: string[][] = [];

  const MAX_CONNECTIONS = 1000; // Define the number of connections to process
  for (let i = 0; i < MAX_CONNECTIONS; i++) {
    const points = sorted[i];
    if(!points) break;
    const [pointA, pointB] = points[0].split("|")

      const idxA = circuits.findIndex(s => s.includes(pointA));
    const idxB = circuits.findIndex(s => s.includes(pointB));
    console.log(idxA, idxB)
    if (idxA !== -1 && idxB !== -1 && idxA === idxB) continue;

    if (idxA === -1 && idxB === -1) {
      circuits.push([pointA, pointB]);
    }}
  const lengths = circuits.map(c => c.length).sort((a, b) => b - a);
  console.log(lengths[0] * lengths[1] * lengths[2]);
  
  return lengths[0] * lengths[1] * lengths[2]
}

const part2 = () => {
  const file = readFileSync('./src/2025/day-8/input.txt', 'utf-8');

  const lines = example.split('\n').map(i => i.split(""));

  const splitters = new Set(
    lines.flatMap((row, y) =>
      row
        .map((c, x) => (c === "^" ? `${x},${y}` : null))
        .filter(Boolean) as string[]
    )
  )

  const startX = lines[0].findIndex(c => c === "S");
  let splits = 0;

  const queue: { x: number, y: number }[] = [];

  console.log(splitters)
  while (queue.length > 0) {

  }
};

const findShortestDistance = (
  p: [number, number, number],
  q: [number, number, number],
) => {
  const result = Math.sqrt(
    (Math.pow((q[0] - p[0]), 2) + Math.pow((q[1] - p[1]), 2) + Math.pow((q[2] - p[2]), 2))
  )
  return result
}