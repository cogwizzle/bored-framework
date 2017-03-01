
/**
 * Test setting onComplete function. 
 * 
 * @author Joseph Fehrman
 * @since 27/02/2017
 */


QUnit.module("On Complete");

QUnit.test("Timer shall have the ability to set an onComplete function to be fired once the time has expired.  Timer shall wait until expired before running onComplete functionality.", function(assert){
  var done = assert.async()
  var timer = new Timer("#canvas", {
    "time" : 1,
    "onComplete" : function(){
      assert.ok(true);
      done();
    }
  });
});
