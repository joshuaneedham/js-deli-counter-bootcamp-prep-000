var katzDeli = [];

function takeANumber() {

}

function nowServing() {

}

function currentLine(line) {
  var i = 1;
  if (line.length > 0){
    return("The line is currently: " + [" " + i + "." + " " + line]);
    line++;
  } else {
    return "The line is currently empty."
  }
}
