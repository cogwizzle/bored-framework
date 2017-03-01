
/**
 * Test if setting color works appropriately. 
 * 
 * @author Joseph Fehrman
 * @since 27/02/2017
 */


QUnit.module("Set Color");

QUnit.test("Timer shall have the ability to override the color of the timer.", function(assert){
  var timer = new Timer("#canvas", {"remainingColor" : "black"});
  var expectedResults = "black";
  var results = timer.options.remainingColor;
  assert.equal(results, expectedResults, "The color provided matches the outcome.");
});
