/**
 * Defines the game.  All client side.
 */

// the global namespace for the project
var FI = FI || {};

function startUp() {
    console.log("Start Up!");

    // local variables that describe the game
    var nRowsAndCols = 14;
    var nBoxPixelsSize = 20;


    // adjust the size of the canvas
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext('2d');
    canvas.width = nRowsAndCols * nBoxPixelsSize;
    canvas.height = nRowsAndCols * nBoxPixelsSize;
    canvas.style.width = nRowsAndCols * nBoxPixelsSize + 'px';
    canvas.style.height = nRowsAndCols * nBoxPixelsSize + 'px';

    // build the Grid
    var colors = ['red', 'green', 'yellow', 'purple', 'pink', 'orange'];
    var grid = new FI.Grid(nRowsAndCols, nBoxPixelsSize, colors);
    grid.draw(ctx);
    console.log("Drew grid.")
}