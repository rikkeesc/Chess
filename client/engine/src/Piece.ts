import { Square } from './Square';
import { Board } from './Board';

export type PieceType = "Pawn" | "King" | "Queen" | "Bishop" | "Knight" | "Rook";

export const PieceType = {
    Pawn: "Pawn",
    King: "King",
    Queen: "Queen",
    Bishop: "Bishop",
    Knight: "Knight",
    Rook: "Rook"
} as const;

export abstract class Piece {
    private _isWhite : boolean;
    private _pieceType : PieceType;
    private _currentSquare : Square;
    private _board : Board;

    constructor(isWhite: boolean, pieceType: PieceType, currentSquare: Square, board : Board) {
        this._isWhite = isWhite;
        this._pieceType = pieceType;
        this._currentSquare = currentSquare;
        this._board = board;
    }
    
    abstract getValidMoves(): Square[];

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

    public get board() : Board {
        return this._board;
    }

}
