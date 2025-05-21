import { Square } from './Square';

export enum PieceType {
    Pawn = "Pawn",
    King = "King",
    Queen = "Queen",
    Bishop = "Bishop",
    Knight = "Knight",
    Rook = "Rook"
}

export abstract class Piece {
    private _isWhite : boolean;
    private _pieceType : PieceType;
    private _currentSquare : Square;

    constructor(isWhite: boolean, pieceType: PieceType, currentSquare: Square) {
        this._isWhite = isWhite;
        this._pieceType = pieceType;
        this._currentSquare = currentSquare;
    }
    
    abstract isValidMove(square: Square): boolean;

    public movePiece(square: Square): void {
        this._currentSquare.removePiece();
        this._currentSquare = square;
        this._currentSquare.piece = this;
    }
    
    public get isWhite() : boolean {
        return this._isWhite;
    }

    public get pieceType() : PieceType {
        return this._pieceType;
    }

    public get CurrentSquare() : Square {
        return this._currentSquare;
    }

}
