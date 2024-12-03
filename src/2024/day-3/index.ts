import fs from 'node:fs';
import readline from 'node:readline';

export const day3 = async()=>{
  // read the file 
  let temp = ``;
  const mathOperations = new Map()
  try{
    const file = fs.createReadStream("src/2024/day-3/input.txt")
    const rl = readline.createInterface({
      input:file,
      crlfDelay:Infinity
    })
    for await (const line of rl) {
      temp += line
    }

    if(temp){
      day3Part1(temp)
    }

  }catch(e){}
}

const day3Part1 = (str:string)=>{
  /// mul\((\d+),(\d+)\)
  let multiplyTotal = 1
  const matchedValues = str.match(/mul\((\d+),(\d+)\)/g)
  if(matchedValues){
    matchedValues.forEach(item=>{
      let [,val] = item.split("mul(")
      let [nextVal,] = val.split(')')
      let theNextOne = nextVal.split(",")
      let lineTotal = theNextOne.reduce((acc,current)=> Number(acc)*Number(current),1)
      multiplyTotal+=lineTotal
    })
    console.log("Part1:", multiplyTotal-1)
  }
}
