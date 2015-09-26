/**
 * Defines the game.  All client side.
 */

// the global namespace for the project
var FI = FI || {};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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

    ////// DEBUG pull out into classes
    var colors = ['red', 'green', 'yellow', 'purple']; // switch to 6 colors
    for(var row =0; row < nRowsAndCols; row++) {
        for(var col = 0; col < nRowsAndCols; col++) {
            ctx.fillStyle = colors[getRandomInt(0,3)];
            ctx.fillRect(row * nBoxPixelsSize, col * nBoxPixelsSize, nBoxPixelsSize, nBoxPixelsSize);
        }
    }
}