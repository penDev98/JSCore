class Point{
    constructor(x, y){
        this._x = x;
        this._y = y;
    }
    static distance(a, b){
        let dx = a._x - b._x;
        let dy = a._y - b._y;
        return Math.sqrt(dx*dx + dy*dy);

    }
}
