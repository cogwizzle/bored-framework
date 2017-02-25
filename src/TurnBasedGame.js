/**
  Class that represents board game state.

  @see Singleton, PlayerException
  @author Joseph Fehrman
  @since 25/02/2017
 */
var TurnBasedGame = (function(){
  var instance;

  /**
    Singleton handle to get the instance.

    @return Get instance of the game.
   */
  function getInstance(){
    if(!instance){
      instance = (function(){
          var players = [];
          var gameState = "none";
          var subscribers = [];
          var turnIndex;

          /* Accessor Methods. */
          function getPlayers(){
          return players;
          }

         function getSubscribers(){
           return subscribers;
         }

         function setPlayers(listOfPlayers){
          players = listOfPlayers;
          }

          function getGameState(){
          return gameState;
          }

          function setGameState(gs){
          gameState = gs;
          }

          /**
            Get the current players turn index.

            @return Index of player in players list.
           */
          function getTurn(){
            // Evaluate turn doesn't exist.
            if(!turnIndex){

              // Evaluate players is not empty.
              if(players.length > 0){
                turnIndex = 0; // Set turn to player 1.
                return turnIndex;

                // Evaluate players is empty.
              }else{
                throw new PlayerException("No players exists.  A player must exists to get a turn.");
              }

              // Evaluate turn exist.
            }else{
              return turnIndex; // Get the current players turn.
            }
          }

          /**
            Set the players turn.

            @param t Index of the player in players list.
           */
          function setTurn(t){
            turnIndex = t;
          }

          /* Fluent API */
          function withGameState(gs){
            setGameState(gs);
            return this;
          }

          function withTurn(t){
            setTurn(t);
            return this;
          }

          /**
            Rotate to the next person's turn.
           */
          function nextTurn(){

            // Evaluate turnIndex is not defined. 
            if(undefined == turnIndex){
              getTurn(); // Initialize turnIndex.
            }
            turnIndex++;

            // Evaluate that the last player has made their move.
            if(turnIndex == players.length){
              // Set player 1 as the person with the next turn.
              turnIndex = 0;
            }
            return turnIndex;
          }

          /**
            Function to subscribe to this observable.

            @param subscriber Observer of this object.
            @return gameBoard.
           */ 
          function subscribe(subscriber){
            subscribers.push(subscriber);
            return this;
          }

          /**
            Notify all subscribers abou the game state change.
           */
          function notify(){
            for(var index = 0, length = subscribers.length; index < length; index++){
              subscribers[index].notify(gameState);
            }
          }

          /**
            Add a player to the game.
           */
          function addPlayer(player){
            players.push(player);
          }

          /*
             Revealing module pattern.
           */
          return {
            "getPlayers" : getPlayers,
              "setPlayers" : setPlayers,
              "getGameState" : getGameState,
              "setGameState" : setGameState,
              "withGameState" : withGameState,
              "withTurn" : withTurn,
              "getSubscribers" : getSubscribers,
              "subscribe" : subscribe,
              "notify" : notify,
              "addPlayer" : addPlayer,
              "nextTurn" : nextTurn,
              "getTurn" : getTurn,
              "setTurn" : setTurn
          };
      })(); // Create instance of inner object.
    }
    return instance;
  }

  /*
     Revealing module pattern.
   */
  return {
    "getInstance" : getInstance
  };
})();
