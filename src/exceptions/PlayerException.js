/**
  Exception defined for errors that have to deal with players.
*/
function PlayerException(msg){
  var message = msg;
  var name = 'PlayerException';

  return {
    "message" : message,
    "name" : name
  };
}
