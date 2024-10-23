import { Box } from "@chakra-ui/react";
import Cell from "./Cell";

type BoardProps = {
    board: number[][];
    width?: string;
    onClick: (x: number, y: number) => void;
};

const Board = ({board, width, onClick}: BoardProps) => {    
    const class_name = `grid ${'grid-cols-'+board.length.toString()} ${'grid-rows-'+board[0].length.toString()} mx-auto`;
    console.log(class_name)
    return (
        <Box className={class_name} style={{width: width}}>
            {board.map(((cols, colIndex) => cols.map((cell, rowIndex) => 
                <Cell 
                    key={colIndex + rowIndex}
                    x={rowIndex} 
                    y={colIndex} 
                    onClick={() => onClick(rowIndex, colIndex)}
                ></Cell>
            )))}
        </Box>
    );
}
export default Board;