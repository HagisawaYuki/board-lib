"use client"
import { Box } from "@chakra-ui/react";
import Board from "./Board";


export default function Home() {
  const column = 8;
  const row = 8;
  const piece_size = 40;
  const board: number[][] = new Array(column).fill(new Array(row).fill(1));
  const width = (row * piece_size).toString() + "px";
  const onClickCell = (x: number, y: number) => {
    console.log(x, y)
}
  return (
    <Box>
      <Board width={width} board={board} onClick={onClickCell}></Board>
    </Box>
  );
}
