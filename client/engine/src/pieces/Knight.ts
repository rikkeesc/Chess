import { Piece } from "../Piece";
import { Square } from "../Square";

export class Knight extends Piece {

    private isOutOfBounds(x: number, y: number) : boolean {
      return x < 0 || x > 7 || y < 0 || y > 7
    }

    getValidMoves(): Square[] {
        const validMoves : Square[] = [];

        let currentX : number = this.CurrentSquare.x;
        let currentY : number = this.CurrentSquare.y;

        for (let i = -1; i <= 1; i += 2) {
          for (let j = -2; j <= 2; j += 4) {
            if (!this.isOutOfBounds(currentX+i, currentY+j)) {
              let s1: Square = this.board.getSquare(currentX+i, currentY+j)
              if (s1.hasPiece) {
                  if (s1.piece?.isWhite != this.isWhite) {
                      validMoves.push(s1);
                  }
              }
              else {validMoves.push(s1);}
            }

            if (!this.isOutOfBounds(currentX+j, currentY+i)) {
              let s2: Square = this.board.getSquare(currentX+j, currentY+i)
              if (s2.hasPiece) {
                  if (s2.piece?.isWhite != this.isWhite) {
                      validMoves.push(s2);
                  }
              }
              else {validMoves.push(s2);} 
            }
          }
          
        }

        return validMoves;
      }
    
}
