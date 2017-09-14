var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  return katzDeliLine;
}

function nowServing() {

}

function currentLine(line) {
  var newLine = [];
  var i = 1;
  if (line.length > 0){
    newLine.push("The line is currently: " + [" " + i + "." + " " + line]);
    newLine++;
  } else {
    return ("The line is currently empty.")
  }
  return newLine;
}
