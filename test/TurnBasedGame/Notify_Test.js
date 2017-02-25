
/**
 * Test the notify functionality. 
 *
 * @author Joseph Fehrman
 * @since 25/02/2017
 */


QUnit.module("Notify");

QUnit.test("Notify shall alert all subscribers of a gamestate change.", function(assert){
  var subscriber = {"name" : "subscriber", "notify" : function(data){this.name = data}};
  var game = TurnBasedGame.getInstance();
  game.subscribe(subscriber);
  game.withGameState(1);
  game.notify();
  expectedResults = 1;
  results = subscriber.name;
  assert.equal(results, expectedResults, "Notification function fired appropriately");
});
