/**
 * Defines the game.  All client side.
 */

// the global namespace for the project
var FI = FI || {};

// a little weird having this up here but we need to be able to inform the grid about the color selection
// TODO: Probably refactor; maybe have Game be a proper class
var grid;
var counter;
var total_clicks_allowed;

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
    grid = new FI.Grid(nRowsAndCols, nBoxPixelsSize, colors, ctx);
    grid.draw();
    console.log("Drew grid.")

    // TODO: It would be nicer to simply have squares of the colors that we can click on; drawing a second canvas was getting tricky
    // set up a selection for each color
    var select = document.getElementById("colorSelect");
    for(var colorIndex in colors) {
        var opt = document.createElement("option");
        opt.value = colorIndex;
        opt.innerHTML = colors[colorIndex];

        // then append it to the select element
        select.appendChild(opt);
    }

    // click counter
    counter = 0;
    var click_counter = document.getElementById("clickCounter");
    click_counter.innerHTML = counter;

    // TODO: calculate real value
    total_clicks_allowed = 22;
    var total_clicks_allowed_counter = document.getElementById("clickTotalAllowed");
    total_clicks_allowed_counter.innerHTML = total_clicks_allowed;
}

function colorSelected() {
    // update counter logic; determine if the game is done
    var click_counter = document.getElementById("clickCounter");
    click_counter.innerHTML = counter+1;
    counter++;

    if(counter > total_clicks_allowed) {
        console.log("Lost");
        // TODO: popup
    }

    var select = document.getElementById("colorSelect");
    var color = select.options[select.selectedIndex].text;
    console.log("Color selected function called with this color:"+color);

    // propagate change on grid
    grid.colorSelected(color, 0, 0);
    grid.draw();

    // TODO: determine if the user won
}