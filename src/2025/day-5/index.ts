import { readFileSync } from 'node:fs';

export const day_5 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: Fresh Ids", result)

    const result2 = part2();
  console.log("Part 2: Fresh Ids", result2)
}

const example = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

const part1 = () => {
  const file = readFileSync('./src/2025/day-5/input.txt', 'utf-8')
  const [validIds, availableIds] = file.split(/\n\n/);
  const o = validIds.split('\n').map(t => {
    const [min, max] = t.split('-')
    return [Number(min), Number(max)]
  })

  let validCount = 0;
  for (const id of availableIds.split('\n')) {
    for (const [min, max] of o) {
      if (Number(id) >= min && Number(id) <= max) {
        // console.log("hi", id, min, max)
        validCount++
        break;
      }
    }
  }

  return validCount
}



const part2 = () => {
  const file = readFileSync('./src/2025/day-5/input.txt', 'utf-8')
  const [validIds, availableIds] = example.split(/\n\n/);
  const o = validIds.split('\n').map(t => {
    const [min, max] = t.split('-')
    return [Number(min), Number(max)]
  })



  return o.reduce((prev, curr, index) => {
    console.log(prev)
    return prev + countIntegersInRange(curr[0], curr[1])
  }, 0)
}

function countIntegersInRange(start: number, end: number): number {
  const startInt = Math.floor(start);
  const endInt = Math.floor(end);

  if (startInt > endInt) {
    return 0; 
  }

  return endInt - startInt + 1;
}
