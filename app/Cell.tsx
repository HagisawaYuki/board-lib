import { Box, Text } from "@chakra-ui/react";

type CellProps = {
    x: number;
    y: number;
    onClick: () => void;
};

const Cell = ({x, y, onClick}: CellProps) => {
    const cellStyle = `flex justify-center items-center w-10 h-10 border border-gray-800 bg-green-400`;
    
    
    return (
        <Box 
            onClick={onClick} 
            className={cellStyle} 
            style={{ width: '40px', height: '40px' }}
        >
            <Text>{x + y}</Text>
        </Box>
    );
}
export default Cell;