/**
  Player model.

  @author Joseph Fehrman
  @since 25/02/2017
*/
var Player = function(aGame, playerName){
  if(!playerName){
    playerName = "Player" + eval(game.getPlayers().length + 1);
  }
  var name = playerName;
  var game = aGame;
  var takeTurn = function(){};

  /* Revealing module pattern. */
  return {
    "name" : name,
    "game" : game,
    "takeTurn" : takeTurn
  };
}
