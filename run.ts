// Usage: pnpm day <year> <day>   e.g. pnpm day 2025 11
const [year, day] = process.argv.slice(2);
if (!year || !day) {
  console.error("Usage: pnpm day <year> <day>");
  process.exit(1);
}

import(`${process.cwd()}/src/${year}/day-${day}/index.ts`).then((mod) => {
  // each day exports one solve function (day_11, day17, ...), so call the first one
  const solve = Object.values(mod).find((v) => typeof v === "function") as () => void;
  solve();
});
