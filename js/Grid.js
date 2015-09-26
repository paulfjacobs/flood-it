
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * The Grid of Boxes.
 */
FI.Grid = function(numRowsAndCols, dimensionOfBox, colors) {
    this.numRowsAndCols = numRowsAndCols;

    // square grid; dimension is the number of rows and cols
    this.data = new Array(numRowsAndCols);
    for(var row =0; row < numRowsAndCols; row++) {
        this.data[row] = new Array(numRowsAndCols);
        for(var col = 0; col < numRowsAndCols; col++) {
            this.data[row][col] = new FI.Box(dimensionOfBox, row * dimensionOfBox,
                                             col * dimensionOfBox, colors[getRandomInt(0,colors.length-1)]);
        }
    }
}

FI.Grid.prototype.draw = function(ctx) {
    // draw each of the boxes
    for(var row =0; row < this.numRowsAndCols; row++) {
        for(var col = 0; col < this.numRowsAndCols; col++) {
            this.data[row][col].draw(ctx);
        }
    }
}
