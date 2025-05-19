import { Piece } from './Piece'


export type SquareColor = 'white' | 'black'

export class Square {

    private _x: number;
    private _y: number;
    private _hasPiece: boolean;
    private _color: SquareColor;
    private _piece: Piece | null;

    public constructor(x: number, y: number, hasPiece: boolean, color: SquareColor, piece: Piece | null){
        this._x = x
        this._y = y
        this._hasPiece = hasPiece
        this._color = color
        this._piece = piece
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        if (value < 0 || value > 7) {
          throw new RangeError('x must be between 0 and 7')
        }
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

      public set y(value: number) {
        if (value < 0 || value > 7) {
          throw new RangeError('y must be between 0 and 7')
        }
        this._y = value;
    }

    public get hasPiece(): boolean {
        return this._hasPiece;
    }

    public set hasPiece(value: boolean) {
        this._hasPiece = value;
    }
    
    public get color(): SquareColor {
        return this._color;
    }

    public set color(color: SquareColor) {
        this._color = color;
    }

    public get piece(): Piece | null {
        return this._piece;
    }

    public set piece(newPiece: Piece | null) {
        this._piece = newPiece;
    }

    public removePiece(){
        this.hasPiece = false;
        this.piece = null;
    }




    

}



