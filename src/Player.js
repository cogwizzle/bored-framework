/**
  Player model.

  @author Joseph Fehrman
  @since 25/02/2017
  @see PlayerException
*/
var Player = function(aGame, playerName){
  // Evaluate that game doesn't exist.
  if(!aGame){

    // Throw error because a player has to have a game.
    throw new PlayerException("Player must have a game.");
  }

  var game = aGame;

  // Evaluate if player name exists.
  if(!playerName){

    // Give defualt player name if it does not exists.
    playerName = "Player" + eval(game.getPlayers().length + 1);
  }

  var name = playerName;
  var takeTurn = function(){};

  /* Accessor methods. */
  function getGame(){
    return game;
  }

  function setGame(aGame){
    game = aGame;
  }

  function getName(){
    return name;
  }

  function setName(playerName){
    name = playerName;
  }

  /* Revealing module pattern. */
  return {
    "getGame" : getGame,
    "setGame" : setGame,
    "getName" : getName,
    "setName" : setName,
    "takeTurn" : takeTurn
  };
}
