import { readFileSync } from "fs";

export const day_11 = () => {
  // call Part 1 first
  const result = part1();
  console.log("Part 1: The grand total", result)

  const result2 = part2();
  console.log("Part 2: The grand total", result2)
}

const example = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`

const part1 = () => {
  const file = readFileSync('./src/2025/day-11/input.txt', 'utf-8');

  const lines = file.split('\n');
  const graph: Record<string, string[]> = {};

  for (const line of lines) {
    const [from, to] = line.split(":");

    graph[from] = to?.split(" ");
  }

  const d = findAllPaths(graph, "you","out");

  return d.length
}


export function findAllPaths(
  graph: Record<string, string[]>,
  start: string,
  end: string
): string[][] {
  const results: string[][] = [];
  const path: string[] = [];

  function dfs(node: string) {
    path.push(node);

    if (node === end) {
      results.push([...path]);
      path.pop();
      return;
    }

    for (const next of graph[node] ?? []) {
      dfs(next);
    }

    path.pop();
  }

  dfs(start);

  return results;
}


const part2 = () => { }