"use strict";

var endTime = null;
var isRunning = false;
var interval = null;
var mode = ""; // "pomodoro" || "short-break" || "long-break"

writeTimeToHtml();

module.exports.start = function() {
  // - check if remainingTime is not null.
  // - if it is null, end function. else, execute the rest of the function.
  // - set isRunning to true
  // - begin the interval, which decrements the remaining by 1 each second.
  // - hint: http://www.w3schools.com/jsref/met_win_setinterval.asp
};

module.exports.stop = function() {
  // - stop the interval
  // - set isRunning to false
};

module.exports.reset = function() {
  // - if mode is "pomodoro", call pomodoro function to reset the time.
  // ...do the same check for the other 2 modes.
};

module.exports.pomodoro = function() {
  // - stop timer
  // - set endTime to 25 minutes in the future
  // - hint: http://preview.tinyurl.com/ncnn8le
};

module.exports.shortBreak = function() {
  // - stop timer
  // - set endTime for 5 minutes in the future
};

module.exports.longBreak = function() {
  // - stop timer
  // - set endTime for 15 minutes in the future
};

function writeTimeToHtml(timeobj) {
  var timestring; 
  if (timeobj === "undefined") {
    timestring = "0:00";
  } else {
    timestring = timeobj.minutes + ":" + timeob.seconds;
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