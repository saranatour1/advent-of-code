import { readFileSync } from "node:fs"

export const day7=()=>{
  const file = readFileSync("src/2024/day-7/input.txt").toString();
  let total = 0;

  // key: the result, value: test cases
  // operations * and + only
  const operations = file.split("\r\n").map((line) => {
    const [value, cases] = line.split(":")
    return [Number(value), cases.trim().split(" ").map(Number)]
  })
  // test all valid possibilities
  for(const [value,cases] of operations){
    if(canAchieveTarget(cases as number[],value as number)){
      total+= value as number
    }
  } 

  
  console.log("Part 2",total)
}


function canAchieveTarget(nums:number[], target:number, index = 0, current = 0):boolean {
  if (index === nums.length) {
      return current === target;
  }
  // concatination case
  let concatNumber = parseInt(current.toString().concat(nums[index].toString()),10) //part 2
  const add:boolean = canAchieveTarget(nums, target, index + 1, current + nums[index]);
  const multiply:boolean = canAchieveTarget(nums, target, index + 1, current * nums[index]);
  const concatenationCase:boolean = canAchieveTarget(nums,target,index+1, concatNumber) // part 2

  return add || multiply || concatenationCase;
}