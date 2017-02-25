/**
 * Test roll functionality of dice. 
 * 
 * @author Joseph Fehrman
 * @since 25/02/2017
 */


QUnit.module("Roll");

QUnit.test("Roll shall only ever pick a number between 0 and the max number specified by dice constructor.", function(assert){
  var dice = new Dice(6);
  var results = dice.roll();
  assert.ok((0 <= results && 6 > results), "Dice is inside of number range.");
});
