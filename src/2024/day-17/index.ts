import { readFileSync } from "node:fs";

export const day17 = () => {
    const file = readFileSync('./src/2024/day-17/input.txt').toString();
    let [Ra,Rb,Rc,...program]= file.match(/\d+/g)?.map(BigInt) || []

    let result = '';
    const out: bigint[] = [];
    let pointer = 0;

    console.log()
};


