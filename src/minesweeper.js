const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
}
const blankBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(blankBoard);

blankBoard[0][1] = '1';
blankBoard[2][2] = 'B';

printBoard(blankBoard);

