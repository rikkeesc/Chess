import "./App.css";

// Unicode chess pieces
const PIECES: Record<string, string> = {
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  p: "♟",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
  P: "♙",
};

// Initial board setup (FEN-like, 8x8 array)
const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

function App() {
  // You can use state if you want to update the board later
  const board = initialBoard;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 40px)",
        gridTemplateRows: "repeat(8, 40px)",
        border: "2px solid #333",
      }}
    >
      {board.flat().map((piece, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const isBlack = (row + col) % 2 === 1;
        return (
          <div
            key={i}
            style={{
              width: 40,
              height: 40,
              backgroundColor: isBlack ? "#769656" : "#eeeed2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              userSelect: "none",
            }}
          >
            {PIECES[piece] || ""}
          </div>
        );
      })}
    </div>
  );
}

export default App;
