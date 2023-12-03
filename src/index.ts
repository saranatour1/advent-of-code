// Day 3
// If you can add up all the part numbers
//but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum.
// (Periods (.) do not count as a symbol.)
//Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?

/**
 * How to get the part number?
 * the part number is any number that is adjacent to a symbol that is not a dot
 * if the number has a symbol next to it from either side, its a part number
 * if the numebr has a symbol on top or under it in the same place [same index]
 * it is consired a part number
 *
 * How to run the loop?
 * read each line,
 * get each line to be part of the array,
 * run the loop on three window sizes, to represent the top,middle, bottom
 * each line will have its number place saved, and each line is checked for a symbol
 *
 * cases:
 * 1- running the loop:\
 * on the start, our window size is 2, which represents the line itself
 * and the bottom line,
 *
 * on anything other than the start there is bottom and top and middle
 *
 * at the end of the array, there is the line itself and the bottom line
 *
 * 2- run cases of each item
 * at idx 0, set window size = 2
 * the loop for this line, will run twice,
 * at window size 1, run a loop, that will check if we hit a symbol (that is not a dot)
 * when we hit a symbol, check if there is a number after it,
 * if there is a number after it, get the index from symbol, and the index where there's a number
 * push these into a string, untill  there is another symbol, if there's another symbol then **number is part number**,
 * else, go to line 2, and check the line for a symbol at the number index (once before, once after)
 * theres a symbol? number is part number,
 * run the loop for the second line  at window size = 3
 *
 * at the end of the array, check for the same case, for window size = 2
 *
 *
 */
import fs from "node:fs";
import readline from "node:readline";

function day3() {
  // read the lines

async  function readLines() {
    try {
      let arr: string[] = [];
      const fileStream = fs.createReadStream("src/day-3/input.txt");
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      for await (const line of rl) {
        arr.push(line);
      }

      return arr;
    } catch (e) {
      console.log(e);
    }
  }
  
  async function handleArrayOfLines() {
    try {
      const arrayOfLines = (await readLines()) as string[];
       optimizeLines(arrayOfLines)
    } catch (e) {
      console.error(e);
    }
  }
  
  handleArrayOfLines();
  function optimizeLines(arr:string[]){
    let arrOfPartNumbers:number[] = []
    
    arr.forEach((item, index)=>{
      let currentIndex = index;
      let tempArrayOfNumbers:number[]= [];
      if(index === 0){
        console.log(item)
      }
    })

  }

  

}





day3();
