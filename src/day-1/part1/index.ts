/**
 * @example
 * 1abc2 -> 12
 * pqr3stu8vwx -> 38
 * a1b2c3d4e5f -> 15
 * treb7uchet -> 77
 * total = 12+38+15+77 =142
 * what to do?
 * 1- get the file
 * 2- read the file
 * 3- read each line
 * 4- a two pointer aproach, 1 pointer at the start, 1 pointer at the end of the line, when it hits a number, get that number positon
 * 5- if there is a number on the left, it takes the first degit
 * 6- if there is a number on the right, it takes the second position
 * 7- if there is one number only, it takes first and second position
 * 8- when there are no more lines, take the resultant values, and add them together
 * 9- return that value
 *
 */
// imports
import fs from "node:fs";
import readline from "node:readline";

// get each line of that file as an array, because arrays are fun!
async function getArrayOfStrings() {
  // geteach line, place in an array.
  try {
    const arr: string[] = [];
    const fileStream = fs.createReadStream("src/day-1/input.txt");
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
    const arrayOfLines = (await getArrayOfStrings()) as string[];
    mapArray(arrayOfLines);
  } catch (e) {
    console.error(e);
  }
}

handleArrayOfLines();

// take the array, and map it with two pointers
function mapArray(arr: string[]) {
  let arrToBeSummed:number[] = [] 
  arr.map((line) => {
    const result = mapEachLine(line);
    if(result.leftDigit === result.rightDigit){
      arrToBeSummed.push(parseInt(`${result.leftDigit}${result.rightDigit}`))

    }else{
      arrToBeSummed.push(parseInt(`${result.leftDigit}${result.rightDigit}`))
    }

  });
  const sum =  arrToBeSummed.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum); // 54644
}



function mapEachLine(str: string) {
  let leftDigit = 0;
  let rightDigit = 0;
  for (let i = 0; i < str.length; i++) { 
    if (!isNaN(parseInt(str[i]))) {
      leftDigit = parseInt(str[i]);
      break;
    }
  }

  for (let j = str.length - 1; j >= 0; j--) {
    if (!isNaN(parseInt(str[j]))) {
      rightDigit = parseInt(str[j]);
      break; 
    }
  }

  return {leftDigit:leftDigit, rightDigit:rightDigit}
}
