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
    intersection.pose("bleu");

    assertTrue(intersection.getState() === Lyngk.State.ONE_PIECE && intersection.color() === "bleu");
}

LyngkTestCase.prototype.testHistoire9 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose("bleu");
    intersection.pose("rouge");

    assertTrue(intersection.getState() === Lyngk.State.STACK && intersection.color() === "rouge");
}

LyngkTestCase.prototype.testHistoire10 = function()
{
    var intersection = new Lyngk.Intersection();
    intersection.pose("bleu");
    intersection.pose("rouge");
    intersection.pose("jaune");
    intersection.pose("vert");
    intersection.pose("noir");

    assertTrue(intersection.getState() === Lyngk.State.FULL_STACK && intersection.color() === "noir");
}

LyngkTestCase.prototype.testHistoire11 = function()
{
    var plateau = new Lyngk.Engine();
    plateau.initOnePiece();

    assertTrue(plateau.isFullOnePiece());
}

LyngkTestCase.prototype.testHistoire12 = function()
{
    var engine = new Lyngk.Engine();
    var flag = true;
    engine.initOnePiece();
    var colornumber = engine.initEveryColor();

    for(var i = 0 ; i < colornumber.length ; i++)
    {
        if(i <= 4 && colornumber[i] != 8)
            flag = false;
        else if(i == 5 && colornumber[i] != 3)
            flag = false;
    }

    assertTrue(flag);
}