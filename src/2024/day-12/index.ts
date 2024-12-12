import { readFileSync } from "fs";

//you need to know that region's area and perimeter
//The area of a region is simply the number of garden plots the region contains.
// /The perimeter of a region is the number of sides of garden plots in the region that do not touch another garden plot in the same region.
export const day12 = () => {
  const file = readFileSync('./src/2024/day-12/input.txt').toString();
  const grid = file.split('\r\n').map(line=>line.split(''))
  // first couple up the regions.
  return grid
}; 
