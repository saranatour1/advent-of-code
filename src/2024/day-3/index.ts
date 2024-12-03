import fs, { readFileSync } from 'node:fs';
import readline from 'node:readline';

export const day3 = async()=>{
  // read the file 
  try{
    const file = readFileSync("src/2024/day-3/input.txt").toString()
      day3Part1(file)
      day3Part2(file)
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

const day3Part2 = (str:string)=>{
  let multipliedTotal = 1;
  let skip = false;
  const matchedValues = str.match(/do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g)
  console.log(matchedValues) 
  matchedValues?.forEach((val)=>{
    if(val === "do()"){
      skip = false;
    }else if (val ==="don't()"){
      skip = true;
    }

    if(!skip && val!=="do()"){
      const [,firstVal] = val.split('mul(')
      const [secondVal,] = firstVal.split(')')
      const actualNumbers = secondVal.split(",")
      multipliedTotal += actualNumbers.reduce((acc,curr) => Number(acc) * Number(curr),1) 
    }
  })
  console.log("Part2", multipliedTotal-1 )
}