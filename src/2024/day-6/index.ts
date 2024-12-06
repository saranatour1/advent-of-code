import { readFileSync } from "node:fs";

export const day6 = () => {
  const file = readFileSync("src/2024/day-6/input.txt").toString();

  const path = file.split("\r\n").map((line) => line.split(""));

  let currentGuardPosition: number[] = findCurrentPosition(path)

  // you start at the position of "^"
  let colIndex = currentGuardPosition[0];
  let rowIndex = currentGuardPosition[1];

  while(colIndex!=-1 && rowIndex!=-1){
    // first find the direction it is facing
    let direction = getNextMove(path[colIndex][rowIndex]);
    // moving up
    while(direction === "up"){
      if(path[colIndex-1][rowIndex] !== "#"){
        path[colIndex][rowIndex] = "X"
        path[colIndex-1][rowIndex] = "^"
        colIndex--;
        currentGuardPosition = findCurrentPosition(path)
      }else{
        // rotate 90 degrees right
        path[colIndex][rowIndex] = ">"
        // path[colIndex][rowIndex+1] = ">"
        currentGuardPosition = findCurrentPosition(path)
        direction = getNextMove(">")
        break;
      }
    }

    while(direction === "right"){
      if(path[colIndex][rowIndex+1] !== "#"){
        path[colIndex][rowIndex] = "X"
        path[colIndex][rowIndex+1] = ">"
        rowIndex++;
        currentGuardPosition = findCurrentPosition(path)
      }else{
        // rotate 90 degrees from right down
        path[colIndex][rowIndex] = "v"
        // path[colIndex+1][rowIndex] = "v"
        currentGuardPosition = findCurrentPosition(path)
        direction = getNextMove("v")
        break;
      }
    }

    while(direction === "down"){
      if(path[colIndex+1][rowIndex] !== "#"){
        path[colIndex][rowIndex] = "X"
        path[colIndex+1][rowIndex] = "v"
        colIndex++;
        currentGuardPosition = findCurrentPosition(path)
      }else{
        // rotate 90 degrees from right left
        path[colIndex][rowIndex] ="<"
        // path[colIndex][rowIndex-1] = "<"
        currentGuardPosition = findCurrentPosition(path)
        direction = getNextMove("<")
        break;
      }
    }

    while(direction === "left"){
      if(path[colIndex][rowIndex-1] !== "#"){
        path[colIndex][rowIndex] = "X"
        path[colIndex][rowIndex-1] = "<"
        rowIndex--;
        currentGuardPosition = findCurrentPosition(path)
      }else{
        // rotate 90 degrees from right up
        path[colIndex][rowIndex] = "^"
        // path[colIndex-1][rowIndex] = "^"
        currentGuardPosition = findCurrentPosition(path)
        direction = getNextMove("^")
        break;
      }
    }

    // check left right and chose down for being stuck
    if(path[colIndex][rowIndex-1] ==="X" && path[colIndex][rowIndex+1]==="X"){
      direction = getNextMove("v")
    }

    if(path[colIndex+1][rowIndex] ==="X" && path[colIndex-1][rowIndex+1]==="X"){
      direction = getNextMove(">")
    }

    if(path[colIndex][rowIndex] === undefined) return
    console.log(direction)
    console.log(currentGuardPosition)
    break
  }

  // // rotation 
  console.log("The current path","\n\n", path.map(line=>line.join('').trim()).join("\n"));
  // console.log("current path of the guard", currentGuardPosition);
};

// current positions to follow are "^" ">" "<" "v"
const findCurrentPosition = (path: string[][]) => {
  let current:number[] = [];
  path.forEach((line, index) => {
    if (line.indexOf("^") !== -1) {
      current = [index, line.indexOf("^")];
    }
    if (line.indexOf("v") !== -1) {
      current = [index, line.indexOf("v")];
    }
    if (line.indexOf(">") !== -1) {
      current = [index, line.indexOf(">")];
    }
    if (line.indexOf("<") !== -1) {
      current = [index, line.indexOf("<")];
    }
  });
  return current;
};

const isVisited = (path:string[][],col:number,row:number,)=>{
  return path[col][row] === "X"
}

const getNextMove =(symbol:string) =>{
  switch (symbol) {
      case "^":
          return "up";
      case ">":
          return "right";
      case "<":
          return "left";
      case "v":
          return "down";
      default:
          return
  }
}