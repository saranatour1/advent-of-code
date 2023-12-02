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

/**
 * part 2: digits are spilled out as numbers, so we have one, two, theree and so on , use? enums!
 */
// imports
import fs from "node:fs";
import readline from "node:readline";

const degits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

async function getArrayOfStrings() {
  // geteach line, place in an array.
  try {
    const arr: string[] = [];
    const fileStream = fs.createReadStream("src/day-1/part1/input.txt");
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
  const newArr = arr.map((item) => mapEachLine(item).calibrationValue);
let sum =0;
  for(const item of newArr){
    sum +=item
  }
  console.log("sum:", sum);
}

function mapEachLine(str: string) {
  const numberWordsPattern: string = degits.map(digit => `${digit.split('').reverse().join('')}`).join("|");
  const pattern: RegExp = new RegExp(`\\d|${numberWordsPattern}`, "g");
  const matches: string[] = str.split('').reverse().join('').match(pattern) || [];
  const occurances = [matches[0], matches[matches.length - 1]];
  let left = 0;
  let right = 0;

  if (!isNaN(parseInt(occurances[0]))) {
    left = Number(occurances[0]);
  } else {
    left = convertDigit(occurances[0]) as number;
  }

  if (!isNaN(parseInt(occurances[1]))) {
    right = Number(occurances[1]);
  } else {
    right = convertDigit(occurances[1]) as number;
  }

  const calibrationValue = right * 10 + left;
  return { calibrationValue: calibrationValue };
}

function convertDigit(digit: string) {

  if (digit === "eno") {
    return 1;
  } else if (digit === "owt") {
    return 2;
  } else if (digit === "eerht") {
    return 3;
  } else if (digit === "ruof") {
    return 4;
  } else if (digit === "evif") {
    return 5;
  } else if (digit === "xis") {
    return 6;
  } else if (digit === "neves") {
    return 7;
  } else if (digit === "thgie") { 
    return 8;
  } else if (digit === "enin") {
    return 9;
  }
}
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

/**
 * part 2: digits are spilled out as numbers, so we have one, two, theree and so on , use? enums!
 */
// imports
import fs from "node:fs";
import readline from "node:readline";

const degits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

async function getArrayOfStrings() {
  // geteach line, place in an array.
  try {
    const arr: string[] = [];
    const fileStream = fs.createReadStream("src/day-1/part1/input.txt");
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
  const newArr = arr.map((item) => mapEachLine(item).calibrationValue);
let sum =0;
  for(const item of newArr){
    sum +=item
  }
  console.log("sum:", sum);
}

function mapEachLine(str: string) {
  const numberWordsPattern: string = degits.map(digit => `${digit.split('').reverse().join('')}`).join("|");
  const pattern: RegExp = new RegExp(`\\d|${numberWordsPattern}`, "g");
  const matches: string[] = str.split('').reverse().join('').match(pattern) || [];
  const occurances = [matches[0], matches[matches.length - 1]];
  let left = 0;
  let right = 0;

  if (!isNaN(parseInt(occurances[0]))) {
    left = Number(occurances[0]);
  } else {
    left = convertDigit(occurances[0]) as number;
  }

  if (!isNaN(parseInt(occurances[1]))) {
    right = Number(occurances[1]);
  } else {
    right = convertDigit(occurances[1]) as number;
  }

  const calibrationValue = right * 10 + left;
  return { calibrationValue: calibrationValue };
}

function convertDigit(digit: string) {

  if (digit === "eno") {
    return 1;
  } else if (digit === "owt") {
    return 2;
  } else if (digit === "eerht") {
    return 3;
  } else if (digit === "ruof") {
    return 4;
  } else if (digit === "evif") {
    return 5;
  } else if (digit === "xis") {
    return 6;
  } else if (digit === "neves") {
    return 7;
  } else if (digit === "thgie") { 
    return 8;
  } else if (digit === "enin") {
    return 9;
  }
}
