import fs from "node:fs";
import readline from "node:readline";



// A hand consists of five cards labeled one of A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2. The relative strength of each card follows this order, where A is the highest and 2 is the lowest.
function day8() {
  async function getLines() {
    const fileStream = fs.createReadStream("src/day-8/ex.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: string[] = [];
    for await (const line of rl) {
      line != '' ? arr.push(line): console.log("no")
    }
    let sequece = arr.filter(line => line.includes("R") && line.includes("L"));
    let movements = arr.map(item => item.split("=").map(item =>item.replace("(","").replace(")","").split(',')))
    console.log(movements)
    return arr;
  }
  // arr[0] is time arr[1] is distance

  //  console.log(handMap)
  

  getLines()
}

day8();
