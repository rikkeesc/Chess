import { Square } from './square'
import { SquareColor } from './square'

export class Board{

    readonly squares: Square[][]

    constructor() {
        this.squares = []
    
        // loop over files (x) and ranks (y)
        for (let x = 0; x < 8; x++) {
          const row: Square[] = []
    
          for (let y = 0; y < 8; y++) {
            // even sum → white, odd sum → black
            const color: SquareColor = (x + y) % 2 === 0 ? 'white' : 'black'
            row.push(new Square(x, y, false, color, null))
          }
    
          this.squares.push(row)
        }
      }

      getSquare(x: number, y: number): Square {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
          throw new Error(`Coordinates out of bounds: (${x},${y})`)
        }
        return this.squares[x][y]
      }
}
