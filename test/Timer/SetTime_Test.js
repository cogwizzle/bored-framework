
/**
 * Test if setting time. 
 * 
 * @author Joseph Fehrman
 * @since 27/02/2017
 */


QUnit.module("Set Time");

QUnit.test("Timer shall have the ability to override the default time of 60 seconds.", function(assert){
  var timer = new Timer("#canvas", {"time" : 280});
  var expectedResults = 280;
  var results = timer.options.time;
  assert.equal(results, expectedResults, "The time was appropriately changed.");
});
