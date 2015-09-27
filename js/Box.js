/**
 * These are the boxes (squares) that make up the Grid. They are each one color at any given point in time.
 */

/**
 * Constructor.
 * @param dimension
 * @param x
 * @param y
 * @param color
 * @constructor
 */
FI.Box = function(dimension, x, y, color) {
    this.dimension = dimension;
    this.x = x;
    this.y = y;
    this.color = color;
}

/**
 * Draw the box in the canvas context.
 * @param ctx Context of the canvas
 */
FI.Box.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.dimension, this.dimension);
}

/**
 * Set the new color.  NOTE: Doesn't redraw.
 * @param newColor The new color.
 */
FI.Box.prototype.setColor = function(newColor) {
    this.color = newColor;
}

FI.Box.prototype.getColor = function() {
    return this.color;
}