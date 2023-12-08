import fs, { copyFileSync } from "node:fs";
import readline from "node:readline";
const items = [ "A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"].reverse();
const hands = ['fiveOfAKind','fourOfAKind','fullHouse','threeOfAKind',"twoPair" ,"onePair",'highCard'];


// A hand consists of five cards labeled one of A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2. The relative strength of each card follows this order, where A is the highest and 2 is the lowest.
function day7() {
  async function getLines() {
    const fileStream = fs.createReadStream("src/day-7/ex.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const arr: string[][] = [];
    for await (const line of rl) {
      arr.push(line.split(" "))
    }
    return resolveArray(arr);
  }
  // arr[0] is time arr[1] is distance
  function resolveArray(arr:string[][]){
    const handMap = new Map();
    /* The line `console.log(arr.length)` is printing the length of the `arr` array to the console. */
    // console.log(arr.length)
    let charOccurrences = new Array(arr.length).fill(0);
    for (const line of arr){
      handMap.set(line[0],Number(line[1]));
    }
    
    for(const [key, bet] of handMap){
      // console.log(key, bet)
      let card = new Array()

      for(const c in key){
        card.push(items.indexOf(c));
        charOccurrences[items.indexOf(c)]++;
      }

      console.log(charOccurrences)
      

    }
    
  //  console.log(handMap)
  }

  getLines()
}

day7();
