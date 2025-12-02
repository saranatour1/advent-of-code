import { createReadStream, readFileSync } from 'node:fs';
import readline, { createInterface } from 'node:readline';

export const day_2 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: Invalid Id's", result)

  // const result2 = part2();
  // console.log("Part 2: The password =", result2)

}

const example = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`

const part1 = () => {
  const file = readFileSync('./src/2025/day-2/input.txt', 'utf-8')
  // const lines = file.split('\n')

  // example lines 
  const lines = file.split(',').map(a=> {
    const [left, right] = a.split('-');
    return [Number(left), Number(right)]
  })


  const invalidIds = new Map<string,number>([]);
  for(const [min,max] of lines){
    // here we have a min to max range, we save ranges in a map, whenever there's an duplicate number, we add 1, if range has odd char length we do nothing

    // we loop from the min to max
    for(let i =min; i<=max; i++){
      const firstHalf = i.toString().substring(0, Math.floor(i.toString().length/2))
      const secondHalf = i.toString().substring(Math.floor(i.toString().length/2), Math.floor(i.toString().length))

      // is i in invalidIds
      if(firstHalf === secondHalf){
        // const value = invalidIds.get(firstHalf);
        invalidIds.set(`${firstHalf}${secondHalf}`, 1)
      }
    }
  }

  return Array.from(invalidIds.keys()).reduce((prev, curr, index)=> prev + Number(curr), 0)
}


// const part2 = () => {
//   const file = readFileSync('./src/2025/day-1/input.txt', 'utf-8')
//   // const lines = file.split('\n')

//   // example lines 
//   const lines = example.split('\n')
//   const passwordMethod = 0x434C49434B

//   let password = 0;
//   let currentRotation = 50;
//   let moreZeros = 0

//   for (const line of lines) {
//     const [, dir, amount] = line.match(/^([LR])(\d+)$/)!;
//     if (dir === "L") {
//       currentRotation = (currentRotation - Number(amount)) % 100
//        moreZeros = (currentRotation + Number(amount))//100
//     } else { // "R"
//       currentRotation = (currentRotation + Number(amount)) % 100
//     }
//     if (currentRotation === 0) password += 1
//   }

//   return password
// }