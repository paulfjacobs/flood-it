
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * The Grid of Boxes.
 */
FI.Grid = function(numRowsAndCols, dimensionOfBox, colors, ctx) {
    this.ctx = ctx;
    this.numRowsAndCols = numRowsAndCols;

    // square grid; dimension is the number of rows and cols
    this.data = new Array(numRowsAndCols);
    for(var row =0; row < numRowsAndCols; row++) {
        this.data[row] = new Array(numRowsAndCols);
        for(var col = 0; col < numRowsAndCols; col++) {
            this.data[row][col] = new FI.Box(dimensionOfBox, col * dimensionOfBox,
                                             row * dimensionOfBox, colors[getRandomInt(0,colors.length-1)]);
        }
    }
}

FI.Grid.prototype.draw = function() {
    // draw each of the boxes
    for(var row =0; row < this.numRowsAndCols; row++) {
        for(var col = 0; col < this.numRowsAndCols; col++) {
            this.data[row][col].draw(this.ctx);
        }
    }
}

// this is the recursive call; the idea is to do a BFS search; search all neighbors; if that color is equal to your
// current color OR the color that you are changing to then also color the function with that Box's row and col
FI.Grid.prototype.colorSelected = function(color, row, col) {
    this.data[row][col].setExplored(true);
    //console.log("colorSelect() with color:"+color+" row:"+row+" col:"+col);
    var currentColor = this.data[row][col].getColor();
    //console.log("Current Color:"+currentColor+" numRowsAndCols:"+this.numRowsAndCols);

    // check neighbors if we haven't already explored them
    // TODO: refactor out checks
    if(row+1 < this.numRowsAndCols && !this.data[row+1][col].getExplored() &&
        (this.data[row+1][col].getColor() === currentColor || this.data[row+1][col].getColor() == color)) {
        //console.log("Checking down...");
        this.colorSelected(color, row+1, col);
    }
    if(col+1 < this.numRowsAndCols && !this.data[row][col+1].getExplored() &&
        (this.data[row][col+1].getColor() === currentColor || this.data[row][col+1].getColor() == color)) {
        //console.log("Checking to the right...");
        this.colorSelected(color, row, col+1);
    }
    if(row-1 > -1 && !this.data[row-1][col].getExplored() &&
        (this.data[row-1][col].getColor() === currentColor || this.data[row-1][col].getColor() == color)) {
        //console.log("Checking down...");
        this.colorSelected(color, row-1, col);
    }
    if(col-1 > -1 && !this.data[row][col-1].getExplored() &&
        (this.data[row][col-1].getColor() === currentColor || this.data[row][col-1].getColor() == color)) {
        //console.log("Checking to the right...");
        this.colorSelected(color, row, col-1);
    }

    // now change my color
    //console.log("Change the color of the Box at row:"+row+" col:"+col+" to color:"+color);
    this.data[row][col].setColor(color);
}

FI.Grid.prototype.resetExplored = function() {
    for(var row =0; row < this.numRowsAndCols; row++) {
        for(var col = 0; col < this.numRowsAndCols; col++) {
            this.data[row][col].setExplored(false);
        }
    }
}

FI.Grid.prototype.allOneColor = function() {
    var color = this.data[0][0].getColor();
    for(var row =0; row < this.numRowsAndCols; row++) {
        for(var col = 0; col < this.numRowsAndCols; col++) {
            if(color != this.data[row][col].getColor()) {
                return false;
            }
        }
    }
    return true;
}
