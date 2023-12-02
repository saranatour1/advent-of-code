/**
 * Determine which games would have been possible
 * if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.
 *  What is the sum of the IDs of those games?
 * @example
 * Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
 * Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
 * Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
 * Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
 * Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
 *
 * In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
 * Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
 * Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
 * Game 4 required at least 14 red, 3 green, and 15 blue cubes.
 * Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.
 */

import fs from "node:fs";
import readline from "node:readline";

// 12 red cubes, 13 green cubes, and 14 blue cubes
const redNum = 12;
const greenNum = 13;
const blueNum = 14;

function part1() {
  console.log("hello");
  getLines();

  // get the linses of the
  async function getLines() {
    const fileStream = fs.createReadStream("src/day-2/input.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: string[] = [];
    for await (const line of rl) {
      arr.push(line); 
    }

    return getStrings(arr);
  }

  // get  the Id, get the blue only 12 red cubes, 13 green cubes, and 14 blue cubes
  function getStrings(arr: string[]) {
    let ids: Set<number> = new Set();
    // let occuarnace
    arr.forEach((line, index) => {
      const [, removeFirst] = line.split(":");
      const lines = removeFirst.split(";");
      let occuarnace: { red: number; green: number; blue: number }[] = [];
      lines.forEach((line) => {
        let red = 0;
        let blue = 0;
        let green = 0;
        line.split(",").forEach((color) => {
          let number = color.match(/\d+/);
          
          if (number) {
            const ocurranceNumber = Number(number[0]);
            if (color.includes("red")) {
              red = ocurranceNumber;
            } else if (color.includes("green")) {
              green = ocurranceNumber;
            } else if (color.includes("blue")) {
              blue = ocurranceNumber;
            }
          }
        });
        occuarnace.push({ red: red, green: green, blue: blue });
      });
      
      if (occuarnace.every(item => item.blue <= blueNum && item.green <= greenNum && item.red <= redNum)) {
        ids.add(index + 1); 
      }
    });
    
    return part2(ids);
  }

  function part2(ids:Set<number>){
    console.log(ids)
  }

  // 3153
}

part1();
