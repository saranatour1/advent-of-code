import { readFileSync } from "node:fs";

export const day6 = () => {
  const file = readFileSync("src/2024/day-6/input.txt").toString();

  const path = file.split("\r\n").map((line) => line.split(""));

  let currentGuardPosition: number[] = [0, 0];

  path.forEach((line, index) => {
    if (line.indexOf("^") !== -1) {
      currentGuardPosition = [index, line.indexOf("^")];
    }
  });

  let inBound = (col: number, row: number) => col != -1 && row != -1;

  let colIndex = currentGuardPosition[0];
  let rowIndex = currentGuardPosition[1];

  while (colIndex !== -1 && rowIndex != -1) {
    // keep walking up until you face "#", check left, check right
    if (!path[colIndex] || !path[colIndex][rowIndex]) {
      break;
    }
    if (colIndex > 0 && path[colIndex - 1][rowIndex] !== "#") {
      path[colIndex][rowIndex] = "X";
      path[colIndex - 1][rowIndex] = "^"
      colIndex--; // Move up
      currentGuardPosition[0] = colIndex; 
    } else {
      break; 
    }
    
    // move right
    if (rowIndex > 0 && path[colIndex][rowIndex + 1] !== "#") {
      path[colIndex][rowIndex] = "X";
      path[colIndex][rowIndex + 1] = ">"
      rowIndex++; // Move right
      currentGuardPosition[1] = rowIndex; 
    } else {
      break; 
    }
    // move down
    if (colIndex > 0 && path[colIndex+1][rowIndex] !== "#") {
      path[colIndex][rowIndex] = "X";
      path[colIndex+1][rowIndex] ="v"
      colIndex++; // Move down
      currentGuardPosition[0] = colIndex; 
    } else {
      break; 
    }
    // // move left
    // if (rowIndex > 0 && path[colIndex][rowIndex-1] !== "#" ) {
    //   path[colIndex][rowIndex] = "X";
    //   rowIndex--; // Move left
    //   currentGuardPosition[1] = rowIndex; 
    // } else {
    //   break; 
    // }

    console.log(`Guard at: (${colIndex}, ${rowIndex})`);
  }

  

  console.log("The current path", path)
  console.log("current path of the guard",currentGuardPosition)
};
