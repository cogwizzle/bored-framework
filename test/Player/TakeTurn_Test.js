/**
 * Test the takeTurn function of player. 
 * 
 * @author Joseph Fehrman
 * @since 25/02/2017
 */


QUnit.module("TakeTurn");

QUnit.test("TakeTurn shall have the ability to call the function that is in it's place.", function(assert){
  var game = {"getPlayers" : function(){return [];}};
  var player = new Player(game);
  player.takeTurn = function(){return 1;};
  var expectedResults = 1;
  var results = player.takeTurn();
  assert.equal(results, expectedResults, "Take turn was fired the correct way.");
});
