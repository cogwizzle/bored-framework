/**
  Build in browser timer.

  @param mountPoint CSS selector.
  @param options Timer options.
  @see Chart.js
  TODO Write unit test for this.

  @author Joseph Fehrman
  @since 27/02/2017
*/
var Timer = function(mountPoint, options){
  // Set up options.
  if(!options){
    options = {};
  }
  var mount = mountPoint;
  var rColor = "red";
  if(options.remaining_color){
    rColor = options.remaining_color;
  }
  var uColor = "black";
  var time = 60;
  if(options.time){
    time = options.time;
  }
  var onComplete = function(){};
  if(options.on_complete){
    onComplete = options.on_complete;
  }

  // Get the element.
  var element = document.querySelector(mount);
  ctx = element.getContext("2d");
  // Set up data to be drawn.
  var data = {
    type : "doughnut",
    options : 
      {
        maintainAspectRatio : true,
        responsive : false,
        tooltips : {
          "enabled" : false
        },
        animation : 
          {
            "duration" : eval(1000 * time),
            "onComplete" : onComplete // After competed call function.
          }
      },
    data : {
      datasets : [{
        data : [time, 0],
        backgroundColor : [
          rColor,
          uColor
        ],
      }]
    }
  };
  new Chart(ctx, data);

  return element; // Return canvas element.
}
