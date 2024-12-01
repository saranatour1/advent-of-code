import { time } from 'node:console';
// the lowest location number that corresponds to any of the initial seeds
import fs, { copyFileSync } from "node:fs";
import readline from "node:readline";

interface MapData {
  seeds: (RegExpMatchArray | null);
  seedToSoil: string[];
  soilToFertilizer: string[];
  fertilizerToWater: string[];
  waterToLightMap: string[];
  lightToTemperature: string[];
  temperatureToHumidity: string[];
  humidity: string[];
}


function day6() {
  // get array of lines

  async function getLines() {
    const fileStream = fs.createReadStream("src/day-6/input.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: number[][] = [];
    for await (const line of rl) {
      const [,linToGet] = line.split(":")
      let x = linToGet.match(/\d+/g)?.map(item => Number(item));
      arr.push(x as number[])
    }
    return resolveArray(arr);
  }
  // arr[0] is time arr[1] is distance
  function resolveArray(arr:number[][]){
    // how many times can I beat the distance number if  iterate over the time and calculate the resultant distance, and multiply all?
    let bestExpectedTimes:number[] =[]
    let part2 = arr.map(nums => nums.join(""))
  

  arr[0].forEach((currentTime,idx)=>{    
    let distance;
    let holdTime; 

    let traveledDistance = arr[1][idx];
    let numberOfGoodTimes =0;
    for(let remainingTime =0; remainingTime<=currentTime;remainingTime++){
      holdTime= currentTime -remainingTime
      if (remainingTime === 0) {
      distance = 0;
      } else {
        const speed: number = holdTime;
        distance = speed * remainingTime;
        
      }
      if(distance > traveledDistance){
        numberOfGoodTimes++;
      }
    }
    bestExpectedTimes.push(numberOfGoodTimes);
  })
  let numberOfGoodTimesPart2 =0;
  
  let currentTime = Number(part2[0])
  let traveledDistance= Number(part2[1]);

  let distance;
  let holdTime; 
  for(let remainingTime =0; remainingTime<=currentTime;remainingTime++){
    holdTime= currentTime -remainingTime
    if (remainingTime === 0) {
    distance = 0;
    } else {
      const speed: number = holdTime;
      distance = speed * remainingTime;
      
    }
    if(distance > traveledDistance){
      numberOfGoodTimesPart2++;
    }
  }


  console.log("Part 1", bestExpectedTimes.reduce((accumulator, currentValue) => accumulator * currentValue, 1))
  console.log("Part 2", numberOfGoodTimesPart2)
  }


  getLines()


}

day6();
