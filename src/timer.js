"use strict";

var endTime = null;
var isRunning = false;
var interval = null;
var mode = ""; // "pomodoro" || "short-break" || "long-break"

module.exports.start = function() {
  console.log('start()');
  // - check if remainingTime is not zero.
  // - if it is null, end function. else, execute the rest of the function.
  // - set isRunning to true
  // - begin the interval, which decrements the remaining by 1 each second.
  // - hint: http://www.w3schools.com/jsref/met_win_setinterval.asp
};

module.exports.stop = function() {
  console.log('stop()');
  // - stop the interval
  // - set isRunning to false
};

module.exports.reset = function() {
  console.log('reset()');
  // - if mode is "pomodoro", call pomodoro function to reset the time.
  // ...do the same check for the other 2 modes.
};

module.exports.pomodoro = function() {
  console.log('pomodoro()');
  // - stop timer
  // - set endTime to 25 minutes in the future
  // - hint: http://preview.tinyurl.com/ncnn8le
};

module.exports.shortBreak = function() {
  console.log('shortBreak()');
  // - stop timer
  // - set endTime for 5 minutes in the future
};

module.exports.longBreak = function() {
  console.log('longBreak()');
  // - stop timer
  // - set endTime for 15 minutes in the future
};

module.exports.writeTimeToHtml = function(timeobj) {
  var timestring;
  if (typeof timeobj === "undefined") {
    timestring = "0:00";
  } else {
    timestring = timeobj.minutes + ":" + timeobj.seconds;
  }
  document.getElementById('timer').innerHTML = timestring;
}

function getRemainingTime(endTime) {
  var r = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor((r/1000) % 60);
  var minutes = Math.floor((r/1000/60) % 60);

  return {
    'total': r,
    'seconds': seconds,
    'minutes': minutes
  };
}