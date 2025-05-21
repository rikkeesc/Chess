import { Piece } from "../Piece";
import { Square } from "../Square";

export class Bishop extends Piece {

   getValidMoves(): Square[] {
        const validMoves : Square[] = [];

        let currentX : number = this.CurrentSquare.x;
        let currentY : number = this.CurrentSquare.y;

        // valid moves diagonals
        let nw: boolean = true, ne: boolean = true, sw: boolean = true, se: boolean = true;
        for (let i = 1; i < 8; i++) {
          if (currentX-i < 0) {
            nw = false;
            sw = false;
          }
          if (currentX+i > 7) {
            ne = false;
            se = false;
          }
          
          if (nw) {
            let s : Square = this.board.getSquare(currentX-i, currentY+i)
            if (s.hasPiece) {
                if (s.piece.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                nw = false;
            }
            else {validMoves.push(s); }
          }
          if (sw) {
            let s : Square = this.board.getSquare(currentX-i, currentY-i)
            if (s.hasPiece) {
                if (s.piece.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                sw = false;
            }
            else {validMoves.push(s); }
          }
          if (ne) {
            let s : Square = this.board.getSquare(currentX+i, currentY+i)
            if (s.hasPiece) {
                if (s.piece.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                ne = false;
            }
            else {validMoves.push(s); }
          }
          if (se) {
            let s : Square = this.board.getSquare(currentX+i, currentY-i)
            if (s.hasPiece) {
                if (s.piece.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                sw = false;
            }
            else {validMoves.push(s); }
          }

          if (!ne && !nw && !se && !sw) {
            break
          }
          
        }

        return validMoves;
    }
    
}
