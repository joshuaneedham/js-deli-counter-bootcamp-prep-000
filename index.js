var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  var i = 1;
  if(katzDeliLine.length == 1){
    newName = ('Welcome, ${newName}. You are number 1 in line.');
  } else {
    newName = ('Welcome, ${newName}. You are number ${i} in line');
  }
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
