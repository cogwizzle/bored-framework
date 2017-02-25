/**
  Roll a dice.

  @since 19/02/2017
*/
var Dice = function(size){
  var size = size;

  /**
    Roll an imaginary dice.
  */
  function roll(){
    return Math.floor(Math.random()*size);
  }

  return {"roll" : roll};
};
