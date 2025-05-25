import type { SquareColor } from './Square'
import { Square } from './Square'
import type { PieceType } from './Piece';
import { Piece } from './Piece';
import { Pawn } from './pieces/Pawn';
import { Bishop } from './pieces/Bishop';
import { King } from './pieces/King';
import { Knight } from './pieces/Knight';
import { Queen } from './pieces/Queen';
import { Rook } from './pieces/Rook';


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
          'Rook',
          'Knight',
          'Bishop',
          'Queen',
          'King',
          'Bishop',
          'Knight',
          'Rook',
      ]
      // White pieces
      backRank.forEach((pType, x) => this.placePiece(x, 0, true, pType))
      for (let x = 0; x < 8; x++) {
          this.placePiece(x, 1, true, 'Pawn')
        }
      
      //black pieces
      backRank.forEach((pType, x) => this.placePiece(x, 7, false, pType))
      for (let x = 0; x < 8; x++) {
          this.placePiece(x, 6, false, 'Pawn')
        }
      }

      private placePiece(x: number, y: number, isWhite: boolean, pType: PieceType): void{
        const square = this.getSquare(x, y);
        let piece!: Piece
        switch (pType) {
          case 'Pawn':
              piece = new Pawn(isWhite, pType, square, this)
              break
          case 'Rook':
              piece = new Rook(isWhite, pType, square, this)
              break
          case 'Knight':
              piece = new Knight(isWhite, pType, square, this)
              break
          case 'Bishop':
              piece = new Bishop(isWhite, pType, square, this)
              break
          case 'Queen':
              piece = new Queen(isWhite, pType, square, this)
              break
          case 'King':
              piece = new King(isWhite, pType, square, this)
              break
          default:
              throw new Error(`Unknown piece type: ${pType}`);
        }
        square.piece = piece
      }


      public getSquare(x: number, y: number): Square {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
          throw new Error(`Coordinates out of bounds: (${x},${y})`)
        }
        return this.squares[x][y]
      }

      public getPieces(isWhite? : boolean) : Piece[] {
        const pieces : Piece[] = this.squares.flat().filter(s => s.hasPiece).map(s => s.piece);
        if (isWhite == undefined) {
          return pieces;
        }
        else if (isWhite == true) {
          return pieces.filter(p => p.isWhite);
        }
        else {
          return pieces.filter(p => !p.isWhite);
        }
      }
}
