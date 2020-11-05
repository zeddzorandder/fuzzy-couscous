import { Rectangle } from '../Rectangle.js';
// make it configurable
export var loadChessboard = (entityContainer) => {
    var y = 0;
    var boardSize = 80;
    var chessFields = [];
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            if ((i + j) % 2 == 0) {
                chessFields.push(entityContainer.addEntity(new Rectangle(null, j * boardSize, y, "yellow", boardSize, boardSize)));
            } else {
                chessFields.push(entityContainer.addEntity(new Rectangle(null, j * boardSize, y, "black", boardSize, boardSize)));
            }
        }
        y += boardSize;
    }
    return chessFields;
}