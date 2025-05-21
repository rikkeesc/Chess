import { Square } from './square';
import { Board } from './Board';

export enum type {
    p = "pawn",
    k = "king",
    q = "queen",
    b = "bishop",
    s = "knight",
    r = "rook"
}

export abstract class Piece {
    private _isWhite : boolean;
    private _type : type;
    private _currentSquare : Square;
    private _board : Board;

    constructor(isWhite: boolean, type: type, currentSquare: Square, board : Board) {
        this._isWhite = isWhite;
        this._type = type;
        this._currentSquare = currentSquare;
        this._board = board;
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

    public get type() : type {
        return this._type;
    }

    public get CurrentSquare() : Square {
        return this._currentSquare;
    }

}