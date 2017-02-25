
/**
 * Test the get turn function. 
 *
 * @author Joseph Fehrman
 * @since 25/02/2017
 */


QUnit.module("Get Turn");

QUnit.test("Get turn should return index 0 if there is a player in players list and no turn index exists.", function(assert){
  var game = TurnBasedGame.getInstance();
  game.addPlayer({"name" : "Player1"});
  expectedResults = 0;
  results = game.getTurn();
  assert.equal(results, expectedResults, "Index of first player selected.");
});

QUnit.test("Get turn should thrown an exception if there are not any players.", function(assert){
  var game = TurnBasedGame.getInstance();
  game.setPlayers([]);
  assert.throws(function(){
    game.getTurn();
  }, "Throws exception when no players exists and a turn is attempted to be apprehended.");
});
