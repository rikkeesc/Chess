import { Square } from './Square'
import { SquareColor } from './Square'
import { PieceType as PieceType, Piece } from './Piece'
import { Bishop } from './pieces/Bishop'
import { King } from './pieces/King'
import { Queen } from './pieces/Queen'
import { Pawn } from './pieces/Pawn'
import { Rook } from './pieces/Rook'
import { Knight } from './pieces/Knight'

export class Board{

    readonly squares: Square[][] = []

    constructor() {
      this.initSquares()
      this.setUpBoard()
      }

      private initSquares(): void {
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
      
      private setUpBoard(): void{
        //setup board with correct pieces
        const backRank: PieceType[] = [
          PieceType.Rook,
          PieceType.Knight,
          PieceType.Bishop,
          PieceType.Queen,
          PieceType.King,
          PieceType.Bishop,
          PieceType.Knight,
          PieceType.Rook,
      ]
      // White pieces
      backRank.forEach((pType, x) => this.placePiece(x, 0, true, pType))
      for (let x = 0; x < 8; x++) {
          this.placePiece(x, 1, true, PieceType.Pawn)
        }
      
      //black pieces
      backRank.forEach((pType, x) => this.placePiece(x, 7, false, pType))
      for (let x = 0; x < 8; x++) {
          this.placePiece(x, 6, false, PieceType.Pawn)
        }
      }

      private placePiece(x: number, y: number, isWhite: boolean, pType: string): void{
        const square = this.getSquare(x, y);
        let piece!: Piece
        switch (pType) {
          case PieceType.Pawn:
              piece = new Pawn(isWhite, pType, square)
              break
          case PieceType.Rook:
              piece = new Rook(isWhite, pType, square)
              break
          case PieceType.Knight:
              piece = new Knight(isWhite, pType, square)
              break
          case PieceType.Bishop:
              piece = new Bishop(isWhite, pType, square)
              break
          case PieceType.Queen:
              piece = new Queen(isWhite, pType, square)
              break
          case PieceType.King:
              piece = new King(isWhite, pType, square)
              break
        }
        square.piece = piece
      }


      private getSquare(x: number, y: number): Square {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
          throw new Error(`Coordinates out of bounds: (${x},${y})`)
        }
        return this.squares[x][y]
      }
}
