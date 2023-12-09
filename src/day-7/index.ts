/**
 * @see https://stackoverflow.com/questions/53628131/ranking-poker-hand
 * to be continoued 
 */
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

  function resolveArray(arr:string[][]){
    const handMap = new Map();
    for (const line of arr){
      handMap.set(line[0],Number(line[1]));
    }

    for(const [hand, bet] of handMap){
      console.log(sorted(hand))
    }

    console.log(handMap)
  }

  function sorted(str:string) {
    let arrayHandOne:string[] = str.split("");
    let sortedHand:string[] = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < arrayHandOne.length; j++) {
        if (items[i] === arrayHandOne[j].charAt(0)) {
          sortedHand.push(arrayHandOne[j]);
        }
      }
    }
    return sortedHand;
  }

  getLines()
}

day7();
