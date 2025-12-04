import { readFileSync } from 'node:fs';

export const day_4 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: Toilet papers", result)


}

const example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

const part1 = () => {
  const file = readFileSync('./src/2025/day-4/input.txt', 'utf-8')
  const lines = file.split('\n');
  let toiletCounter = 0;

  for(const lineIndex in lines){
    // we moveee
    const lineSplit = lines[lineIndex].split('')
      // console.log(lineIndex)
    lineSplit.forEach((char,index)=>{
      if(char==="@"){
        // now we find the 8 adjacent
        // find left 
        const okay = { left: lines[lineIndex][index-1],
            topLeft: lines?.[Number(lineIndex)-1]?.[index-1],
            bottomLeft:lines?.[Number(lineIndex)+1]?.[index-1],

            top:lines?.[Number(lineIndex) - 1]?.[index],
            bottom:lines?.[Number(lineIndex)+1]?.[index],

            topRight:lines?.[Number(lineIndex)-1]?.[index+1],
            bottomRight:lines?.[Number(lineIndex)+1]?.[index+1],
            right:lines?.[Number(lineIndex)]?.[index+1]
          }

        const iterateOkay = Object.entries(okay)
        
        const total = iterateOkay.reduce((prev,[key, value],index) => prev + (value === "@" ? 1:0),0)
        
        if(total <4) toiletCounter++
      }
    })
  }

  return toiletCounter
}