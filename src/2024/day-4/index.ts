import { readFileSync } from "fs";

/**
 * MMMSXXMASM 
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
 */

let WORDS_TO_FIND = "XMAS";
export const day4 = () => {
  const file = readFileSync("src/2024/day-4/input.txt").toString();
  // times XMAS is found

  let totalOcc = 0;

  const wordGrid = file
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.split(""));

  for (let i = 0; i < wordGrid.length; i++) {
    for (let j = 0; j < wordGrid[i].length; j++) {
      // cols
      // X M A S
      if(wordGrid[i][j] === "X"){
        if(scanForward(i,j,wordGrid)){
          totalOcc++;
        }

        if(scanBackward(i,j,wordGrid)){
          totalOcc++
        }

        if(scanUpwards(i,j,wordGrid)){
          totalOcc++
        }

        if(scanDownWards(i,j,wordGrid)){
          totalOcc++
        }

        if(scanDiagonalBottomLeft(i,j,wordGrid)){
          totalOcc++
        }

        if(scanDiagonalTopLeft(i,j,wordGrid)){
          totalOcc++
        }
        if(scanDiagonalBottomRight(i,j,wordGrid)){
          totalOcc++
        }
        if(scanDiagonalTopRight(i,j,wordGrid)){
          totalOcc++
        }
      }

      if(wordGrid[i][j] === "A"){
        //
      }
    }
  }
  console.log("Part1:", totalOcc)
};

const scanForward = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row][col+shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanBackward = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row][col-shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanUpwards = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row - shiftIndex]?.[col];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanDownWards = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row + shiftIndex]?.[col];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanDiagonalBottomLeft = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row + shiftIndex]?.[col + shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanDiagonalTopLeft = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row - shiftIndex]?.[col + shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanDiagonalBottomRight = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row - shiftIndex]?.[col - shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}

const scanDiagonalTopRight = (row:number, col:number,wordGrid:string[][])=>{
  let collected = '';
  let shiftIndex = 0;
  for(let i = 0; i< WORDS_TO_FIND.length ; i++){
    const currentChar = wordGrid[row + shiftIndex]?.[col - shiftIndex];    
    collected += currentChar
    if(!WORDS_TO_FIND.includes(collected)){
      return false
    }
    shiftIndex += 1
  }
  return true
}


const scanForMAS = (row:number,col:number, wordGrid:string[][])=>{
  // if i found the A, look for m s on 4 sides
  const newWordToFind = 'MAS';
  
}