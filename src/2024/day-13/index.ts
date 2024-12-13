import { readFileSync } from "node:fs";

const file = readFileSync("./src/2024/day-13/input.txt").toString();
export const day13 = () => {
  const leastTokenPrice: number[] = new Array();
  const machines: Record<string, { x: number; y: number }>[] = [
    { prize: { x: 0, y: 0 }, A: { x: 0, y: 0 }, B: { x: 0, y: 0 } },
  ];
  const combinations = file.split(/\n\s*\n/).map((line) => line.trim().split(/\r\n/));

  for (const combo of combinations) {
    const valueA = combo[0].match(/\d+/g)?.map(Number);
    const valueB = combo[1].match(/\d+/g)?.map(Number);
    const valuePrize = combo[2].match(/\d+/g)?.map(Number);

    if (!valueA || !valueB || !valuePrize) continue;
    machines.push({
      prize: { x: valuePrize[0] + 10000000000000, y: valuePrize[1] + 10000000000000 },
      A: { x: valueA[0], y: valueA[1] },
      B: { x: valueB[0], y: valueB[1] },
    });
  }
  machines.shift();

  for (const { prize, A, B } of machines) {
    const det = A.x * B.y - A.y * B.x;
    const nA = ((B.y * prize.x - B.x * prize.y) / det) * 3;
    const nB = (A.x * prize.y - A.y * prize.x) / det;
    leastTokenPrice.push(isInt(nA) && isInt(nB) ? nA + nB : 0);
  }
  const total = leastTokenPrice.reduce((prev, current, index, array) => prev + current, 0);

  console.log(total);
};

function isInt(n:number){
  return Number(n) === n && n % 1 === 0;
}
