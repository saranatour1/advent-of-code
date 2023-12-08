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


function day5() {
  // get array of lines

  async function getLines() {
    const fileStream = fs.createReadStream("src/day-5/input.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: string[] = [];
    for await (const line of rl) {
      arr.push(line);
    }
    return resolveArray(arr);
  }

  function resolveArray(arr:string[]){
    const [,seedsNumber] =arr[0].split(':')
    const seeds = seedsNumber.match(/\d+/g)

    let seedToSoilMap:string[] = []
    let soilToFertilizerMap:string[] =[];
    let fertilizerToWaterMap:string[] =[];
    let waterToLightMap:string[] =[];
    let lightToTemperatureMap:string[] =[];
    let tempToHumidityMap:string[] = [];
    let humidityToLocationMap:string[] =[];

    let arrWithoutSeeds = arr.filter((line)=> !line.includes("seeds:"))

    let currentMap: string[] = [];
    for (const line of arrWithoutSeeds) {
      if (line.includes('seed-to-soil map:')) {
        currentMap = seedToSoilMap;
      } else if (line.includes('soil-to-fertilizer map:')) {
        currentMap = soilToFertilizerMap;
      } else if (line.includes('fertilizer-to-water map:')) {
        currentMap = fertilizerToWaterMap;
      } else if (line.includes('water-to-light map:')) {
        currentMap = waterToLightMap;
      } else if (line.includes('light-to-temperature map:')) {
        currentMap = lightToTemperatureMap;
      } else if (line.includes('temperature-to-humidity map:')) {
        currentMap = tempToHumidityMap;
      } else if (line.includes('humidity-to-location map:')) {
        currentMap = humidityToLocationMap;
      } else if (line.trim() !== '') {
        // Add non-empty lines to the current map
        currentMap.push(line);
      }
    }
    const item = {
      seeds: seeds ,
      seedToSoil: seedToSoilMap,
      soilToFertilizer:soilToFertilizerMap,
      fertilizerToWater: fertilizerToWaterMap,
      waterToLightMap:waterToLightMap,
      lightToTemperature:lightToTemperatureMap,
      temperatureToHumidity:tempToHumidityMap,
      humidity:humidityToLocationMap 
    }

    return takeSeedsInformation(item)
  }

  function takeSeedsInformation(info:MapData){
    // find a seed, seed to soil => found? =>soil => fertilizer => found? fertilizer => water=> found ..location;
    const seeds = info.seeds;
    const locations:Map<number,number> = new Map(); // seed number to location
    
    const allItems = allSeeds(info);
    
    seeds?.forEach((seed) => {
      let currentSource = Number(seed);
  
      allItems.forEach((item) => {
        const destination = findDestination(item,currentSource);
  
        if (destination !== currentSource) {
          locations.set(Number(seed), destination);
          currentSource = destination;
        }
      });
    });
    
    console.log(getLowest(locations))
  }

  function findDestination(mappingList:[number,number][],givenSource:number ){
    for (const [destination, source] of mappingList) {
      if (source === givenSource) {
          return destination;
      }
  }
  return givenSource; 
  }

  function getLowest(map:Map<number,number>){
    const valuesArray = Array.from(map.values());
    return Math.min(...valuesArray)
  }

  function allSeeds(info:MapData){
    const seedToSoilMap = getMapInfo(info.seedToSoil)
    const soilToFertilizerMap = getMapInfo(info.soilToFertilizer)
    const fertilizerToWaterMap= getMapInfo(info.fertilizerToWater);
    const waterToLightMap =getMapInfo(info.waterToLightMap);
    const lightToTemperatureMap = getMapInfo(info.lightToTemperature);
    const temperatureToHumidityMap = getMapInfo(info.temperatureToHumidity);
    const humidityToLocationMap = getMapInfo(info.humidity)
    return [seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap ];
  }

  function getMapInfo(arr:string[]){
    // d => s
    const map:[number,number][] =new Array();
    arr.forEach((line)=>{
      let newLine = line.match(/\d+/g)!;
      let destinationStart = Number(newLine[0] as string);
      let sourceStart = Number(newLine[1] as string);
      let range = Number(newLine[2] as string);
      

        for (let i = 0; i <= range; i++) {
          map.push([destinationStart + i, sourceStart + i]);
        }
     
    })

    return map;
  }

  getLines()


}

day5();
