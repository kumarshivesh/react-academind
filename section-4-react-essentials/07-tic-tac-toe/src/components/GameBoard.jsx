//Here, these three nested arrays are items of `initialGameBoard` array. The `map()` method takes a function as an input, a function that will be called automatically for every item in that array. So, in the end here for every nested array becasue these three nested arrays are the items in the `initialGameBoard` array.
/*
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
*/

export default function GameBoard({ onSelectSquare, board }) {
  /*
  let gameBoard = initialGameBoard

  for(const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }
  */

  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleSelectSqaure (rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol
      return updatedBoard
    })
    onSelectSquare()
    
  }
  */
  return (
  <ol id='game-board'>
    {board.map((row, rowIndex) => (
     <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
              disabled={playerSymbol !== null}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  );
}
