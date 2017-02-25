
/**
 * Test the subscribe functionality. 
 *
 * @author Joseph Fehrman
 * @since 25/02/2017
 */


QUnit.module("Subscribe");

QUnit.test("Subscribe shall add the subscribing object to a list.", function(assert){
  var subscriber = {"name" : "subscriber"};
  var game = TurnBasedGame.getInstance();
  game.subscribe(subscriber);
  var results = game.getSubscribers();
  assert.ok((results.indexOf(subscriber) > -1), "Subscriber is in the list of subscribers.");
});
