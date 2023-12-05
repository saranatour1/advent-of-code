// import { count } from "node:console";
import fs, { copyFileSync } from "node:fs";
import readline from "node:readline";

function day4() {
  // get array of lines

  async function getLines() {
    const fileStream = fs.createReadStream("src/day-4/input.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: string[] = [];
    for await (const line of rl) {
      arr.push(line);
    }
    return getArrayOfStrings(arr);
  }

  function getArrayOfStrings(arr: string[]) {
    const cards = arr
      .map((item) => item.split(":"))
      .map((item, index) => item[1].split("|").map((item) => item.trim().split(/\s+/)));

    let points = 0;
    let allCards: Record<number, number> = {};
    cards.forEach(([winning, myNumbers], idx) => {
      let found = 0;
      let temp = 0;

      myNumbers.forEach((item) => {
        if (winning.includes(item)) {
          found++;
          if (temp === 0) {
            temp += 1;
          } else {
            temp *= 2;
          }
        }
      });

      if (temp >= 1) {
        points += temp;
      }

      if (!(idx in allCards)) {
        allCards[idx] = 1;
      }

      for (let i = idx + 1; i <= idx + found; i++) {
        allCards[i] = (allCards[i] || 1) + allCards[idx];
      }
    });
    const result = Object.values(allCards).reduce((sum, value) => sum + value, 0);

    console.log(`Part 1 `, points);
    console.log("part 2", result);
  }

  getLines();
}

day4();
