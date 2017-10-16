"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intercoordinates = [];
    var initcolors = [8,8,8,8,8,3];
    var init = function()
    {
        var goodCoord = Lyngk.goodCoord;
        for(var i = 0 ; i < goodCoord.length ; i++)
        {
            intercoordinates[goodCoord[i]] = new Lyngk.Intersection();
        }
    }

    this.initOnePiece = function()
    {
        for (var coordinates in intercoordinates) {
            if (intercoordinates.hasOwnProperty(coordinates))
            {
                intercoordinates[coordinates].pose(Lyngk.Color.IVORY);
            }
        }
    }

    this.initEveryColor = function()
    {
        return initcolors;
    }

    this.plateau = function()
    {
        return intercoordinates;
    }

    this.isFullOnePiece = function()
    {
        for (var coordinates in intercoordinates) {
            if (intercoordinates.hasOwnProperty(coordinates))
            {
                if(intercoordinates[coordinates].getState() != Lyngk.State.ONE_PIECE)
                    return false;
            }
        }
        return true;
    }

    init();

};
