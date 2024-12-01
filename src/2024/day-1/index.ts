import { stringData } from './input';
export const day1 = ()=>{
  let data = stringData.split('\n')
  const left:number[] = [];
  const right:number[] = [];
  let distance = 0;
  let totalSimilarityScore = 0;

   data.forEach((line)=>{
    const [left1,right1] = line.split(/\s+/)
      left.push(Number(left1));
      right.push(Number(right1))
  })
  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  let index = 0;

  while(index <= left.length-1){
    distance += Math.abs((left[index] -right[index]))
    index++;
  }

  console.log("Part 1",distance)

  for(const leftNumber of left){
    let numberOfTimesInRightArray = getOccurrence(right,leftNumber)
    totalSimilarityScore += (leftNumber * numberOfTimesInRightArray)
  }
  console.log('Part 2:',totalSimilarityScore)
}

function getOccurrence(array:number[], value:number) {
  let count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}
