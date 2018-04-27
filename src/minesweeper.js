const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    } board.push(row);
  } return board;
};

// console.log(generatePlayerBoard(2, 3));

const generateBombBoard = () => {
  
}