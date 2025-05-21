import { Piece } from "../Piece";
import { Square } from "../Square";

export class Pawn extends Piece {

    getValidMoves(): Square[] {
        const validMoves : Square[] = [];

        let currentX : number = this.CurrentSquare.x;
        let currentY : number = this.CurrentSquare.y;

        if (this.isWhite) {
            if (currentX < 7) {
                let s1: Square = this.board.getSquare(currentX+1, currentY)
                if (!s1.hasPiece) {
                    validMoves.push(s1);
                    if (currentX == 1) {
                        let s2: Square = this.board.getSquare(3, currentY)
                        if (!s2.hasPiece) {
                            validMoves.push(s2);
                        }
                    }
                }
                if (currentY <= 6) {
                    let s3: Square = this.board.getSquare(currentX+1, currentY+1)
                    if (s3.hasPiece && (s3.piece?.isWhite != this.isWhite)) {
                        validMoves.push(s3);
                    }
                }
                if (currentY >= 1) {
                    let s4: Square = this.board.getSquare(currentX+1, currentY-1)
                    if (s4.hasPiece && (s4.piece?.isWhite != this.isWhite)) {
                        validMoves.push(s4);
                    }
                }
            }
        }
        else {
            if (currentX > 0) {
                let s1: Square = this.board.getSquare(currentX-1, currentY)
                if (!s1.hasPiece) {
                    validMoves.push(s1);
                    if (currentX == 6) {
                        let s2: Square = this.board.getSquare(4, currentY)
                        if (!s2.hasPiece) {
                            validMoves.push(s2);
                        }
                    }
                }
                if (currentY <= 6) {
                    let s3: Square = this.board.getSquare(currentX-1, currentY+1)
                    if (s3.hasPiece && (s3.piece?.isWhite != this.isWhite)) {
                        validMoves.push(s3);
                    }
                }
                if (currentY >= 1) {
                    let s4: Square = this.board.getSquare(currentX-1, currentY-1)
                    if (s4.hasPiece && (s4.piece?.isWhite != this.isWhite)) {
                        validMoves.push(s4);
                    }
                }
            }
        }

        return validMoves;
    }
    
}
