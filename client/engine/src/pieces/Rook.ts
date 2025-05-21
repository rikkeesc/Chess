import { Piece } from '../Piece'
import { Square } from '../square'

export class Rook extends Piece {

    getValidMoves(): Square[] {
        const validMoves : Square[] = [];

        let currentX : number = this.CurrentSquare.x;
        let currentY : number = this.CurrentSquare.y;

        // valid moves right
        for (let x = currentX+1; x <= 7; x++) {
            let s : Square = this.board.getSquare(x, currentY)
            if (s.hasPiece) {
                if (s.piece?.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                break;
            }
            validMoves.push(s);           
        }
        // valid moves left
        for (let x = currentX-1; x >= 0; x--) {
            let s : Square = this.board.getSquare(x, currentY)
            if (s.hasPiece) {
                if (s.piece?.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                break;
            }
            validMoves.push(s);           
        }
        // valid moves up
        for (let y = currentY+1; y <= 7; y++) {
            let s : Square = this.board.getSquare(currentX, y)
            if (s.hasPiece) {
                if (s.piece?.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                break;
            }
            validMoves.push(s); 
            
        }
        // valid moves down
        for (let y = currentY-1; y <= 0; y--) {
            let s : Square = this.board.getSquare(currentX, y)
            if (s.hasPiece) {
                if (s.piece?.isWhite != this.isWhite) {
                    validMoves.push(s);
                }
                break;
            }
            validMoves.push(s); 
            
        }

        return validMoves;
    }

}