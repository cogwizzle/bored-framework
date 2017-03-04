/**
  Build in browser timer.

  @param mountPoint CSS selector.
  @param options Timer options.
  @see Chart.js

  @author Joseph Fehrman
  @since 27/02/2017
*/
var Timer = function(mountPoint, options){
  var opts = {
    "remainingColor" : "red",
    "usedColor" : "black",
    "time" : 60,
    "onComplete" : function(){}
  }
  opts = extend(opts, options);
    
  // Set up options.
  if(options){
    opts = extend(opts, options);
  }

  // Get the element.
  var element = document.querySelector(mountPoint);
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
            "duration" : eval(1000 * opts.time),
            "onComplete" : opts.onComplete, // After competed call function.
            "easing" : "linear"
          }
      },
    data : {
      datasets : [{
        data : [opts.time, 0],
        backgroundColor : [
          opts.remainingColor,
          opts.usedColor
        ],
      }]
    }
  };
  new Chart(ctx, data);

  return {
    "element" : element,
    "context" : ctx,
    "options" : opts
  }
}
