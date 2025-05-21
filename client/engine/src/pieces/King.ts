import { Piece } from "../Piece";
import { PieceType } from '../Piece'
import { Square } from "../Square";

export class King extends Piece {

    private isCheck(square : Square) : boolean {
      const opponentPieces : Piece[] = this.board.getPieces(!this.isWhite);
      // returns true if any of the opponents pieces can move to the square
      return opponentPieces.some(p => p.getValidMoves().includes(square));

    }

    getValidMoves(): Square[] {
        const validMoves : Square[] = [];

        let currentX : number = this.CurrentSquare.x;
        let currentY : number = this.CurrentSquare.y;
        
        for (let x = -1; x <= 1; x++) {
          if ((currentX + x) < 0 || (currentX + x) > 7) {
            continue;
          }
          for (let y = -1; y <= 1; y++) {
            if (y == 0 || currentY + y < 0 || currentY + y > 7) {
              continue;
            }
            let s : Square = this.board.getSquare(currentX + x, currentY + y)
            if (this.isCheck(s)) {
              continue;
            }
            if (s.hasPiece) {
              if (s.piece?.isWhite == this.isWhite || s.piece?.pieceType == PieceType.King) {
                continue;
              }
            }
            validMoves.push(s);
            
          }
          
        }
        
        return validMoves;
      }
}
