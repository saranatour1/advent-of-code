import { readFileSync } from "node:fs";

export const day6 = () => {
  const file = readFileSync("src/2024/day-6/input.txt").toString();

  const path = file.split("\r\n").map((line) => line.split(""));

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const rows = path.length;
  const cols = path[0].length;

  let guardRow: number = 0,
    guardCol: number = 0,
    guardDir: number = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ("^>v<".includes(path[r][c])) {
        guardRow = r;
        guardCol = c;
        guardDir = "^>v<".indexOf(path[r][c]); // Map direction symbol to index
        break;
      }
    }
  }

  const visited = new Set([`${guardRow},${guardCol}`]);

  while (true) {
    const [dr, dc] = directions[guardDir];
    const nextRow = guardRow + dr;
    const nextCol = guardCol + dc;

    // Check if the next position is outside the grid
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
      break; // Guard leaves the grid
    }

    if (path[nextRow][nextCol] === "#") {
      // Obstacle ahead: turn right (clockwise)
      guardDir = (guardDir + 1) % 4;
    } else {
      [guardRow,guardCol] = [nextRow,nextCol]
      visited.add(`${guardRow},${guardCol}`);
    }
  }

  console.log(`Distinct positions visited: ${visited.size}`);
};
