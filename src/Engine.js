"use strict";

Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intersections = [];
    var initial_colored_pieces = [8, 8, 8, 8, 8, 3];

    var initBoard = function () {
        var good_coordinates = Lyngk.goodCoordinates;
        for (var index = 0; index < good_coordinates.length; index++) {
            intersections[good_coordinates[index]] = new Lyngk.Intersection();
        }
    };

    this.randomColor = function () {
        var random_color;
        do {
            random_color = Math.floor(Math.random() * 6);
        }
        while (initial_colored_pieces[random_color] === 0);
        return random_color;
    };

    this.AllIntersectionsWithOnePiece = function () {
        for (var index in intersections) {
            if (intersections.hasOwnProperty(index)) {
                var random_color = this.randomColor();
                intersections[index].putPieceIntersection(random_color);
                initial_colored_pieces[random_color]--;
            }
        }
    };

    this.getInitialColoredPieces = function () {
        return initial_colored_pieces;
    };

    this.getSizeBoardIntersections = function () {
        return intersections.length;
    };

    this.isFullOnePiece = function () {
        var index;
        Object.keys(intersections).forEach(
            function (index) {
                if (intersections.hasOwnProperty(index)) {
                    var flag = intersections[index].getState();
                    if (flag !== Lyngk.State.ONE_PIECE) {
                        return false;
                    }
                }
            });
        return true;
    };

    this.getBoard = function () {
        return intersections;
    };

    this.moveStack = function (origine, destination) {
        var piece_one = new Lyngk.Coordinates(origine[0], origine[1]);
        var piece_two = new Lyngk.Coordinates(destination[0], destination[1]);
        if (piece_one.CoordinateIsValid() && piece_two.CoordinateIsValid()) {
            if (intersections[piece_two].getState() !== Lyngk.State.VACANT) {
                var hand = intersections[piece_one].takeStackIntersection();
                var colorPile;
                var index;
                Object.keys(hand).forEach(function (index) {
                    colorPile = hand[index].getColor();
                    intersections[piece_two].putPieceIntersection(colorPile);
                });
            }
        }
    };

    initBoard();

};
