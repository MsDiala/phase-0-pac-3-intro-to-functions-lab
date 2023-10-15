// shout(string) - receives one argument and returns it in all caps
function shout(string) {
    return string.toUpperCase();
  }
  
  // whisper(string) - receives one argument and returns it in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // logShout(string) - calls console.log() with its one argument in all caps
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // logWhisper(string) - calls console.log() with its one argument in all lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // sayHiToGrandma(string) - returns different strings based on the input
  function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
  }
  
  // sayHiToHeadphonedRoommate(string) - returns different strings based on the input
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToGrandma,
    sayHiToHeadphonedRoommate
  };
  