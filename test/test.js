'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testHistoire1 = function() {
  var coordinates = new Lyngk.Coordinates('A', 1);

  assertFalse(coordinates.isValid());
};

LyngkTestCase.prototype.testHistoire2 = function() {
  assertTrue(Lyngk.goodCoord.length === 43);
}

LyngkTestCase.prototype.testHistoire3 = function() {
  var coordinates = new Lyngk.Coordinates('A', 3);

  assertTrue(coordinates.toString() === 'A3');
}

LyngkTestCase.prototype.testHistoire4 = function() {
  var coordinates = new Lyngk.Coordinates('A', 1);

  assertTrue(coordinates.toString() === 'invalid');
}

LyngkTestCase.prototype.testHistoire5 = function() {
  var coordinates = new Lyngk.Coordinates('A', 3);
  var coordinatesClone = new coordinates.clone();

  assertTrue(coordinates.toString() === coordinatesClone.toString());
}

LyngkTestCase.prototype.testHistoire6 = function() {
    var coordinates = new Lyngk.Coordinates('A', 3);

    assertTrue(coordinates.hash() === 68);
}

LyngkTestCase.prototype.testHistoire7 = function()
{
    var intersection = new Lyngk.Intersection();

    assertTrue(intersection.getState() === Lyngk.State.VACANT);
}

LyngkTestCase.prototype.testHistoire8 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose(Lyngk.Color.BLUE);

    assertTrue(intersection.getState() === Lyngk.State.ONE_PIECE && intersection.color() === Lyngk.Color.BLUE);
}

LyngkTestCase.prototype.testHistoire9 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose(Lyngk.Color.BLUE);
    intersection.pose(Lyngk.Color.RED);

    assertTrue(intersection.getState() === Lyngk.State.STACK && intersection.color() === Lyngk.Color.RED);
}

LyngkTestCase.prototype.testHistoire10 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose(Lyngk.Color.BLUE);
    intersection.pose(Lyngk.Color.RED);
    intersection.pose(Lyngk.Color.IVORY);
    intersection.pose(Lyngk.Color.GREEN);
    intersection.pose(Lyngk.Color.BLACK);

    assertTrue(intersection.getState() === Lyngk.State.FULL_STACK && intersection.color() === Lyngk.Color.BLACK);
}

LyngkTestCase.prototype.testHistoire11 = function()
{
    var plateau = new Lyngk.Engine();
    plateau.initOnePiece();

    assertTrue(plateau.isFullOnePiece());
}

LyngkTestCase.prototype.testHistoire12 = function()
{
    var plateau = new Lyngk.Engine();
    var test = true;
    var nbcolor = plateau.initEveryColor();
    plateau.initOnePiece();

    for(var i = 0 ; i < nbcolor.length ; i++)
    {
        if(i <= 4 && nbcolor[i] > 0)
            test = false;
        else if(i === 5 && nbcolor[i] > 0)
            test = false;
    }

    assertTrue(test);
}

LyngkTestCase.prototype.testHistoire13 = function()
{
    var plateau = new Lyngk.Engine();
    plateau.initOnePiece();
    var taillePlateau = plateau.getTailleBoard();
    var test = true;

    for(var i in taillePlateau)
    {
        if(plateau[i].getTaillePile() !== 1)
            test = false;
    }

    assertTrue(test);
}

LyngkTestCase.prototype.testHistoire14 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose(Lyngk.Color.BLUE);
    intersection.pose(Lyngk.Color.RED);

    assertTrue(intersection.color() === Lyngk.Color.RED);
}

LyngkTestCase.prototype.testHistoire15 = function()
{
    
}