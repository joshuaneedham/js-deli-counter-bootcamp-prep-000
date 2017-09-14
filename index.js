var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  // line would equal = [] if it's empty
  if(line.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    // returns an announcement about the person it is serving, and shifts the line
    // what do we store values in?
    var name = line[0]
    // line is equal to ['john', 'bob']
    line.shift()
    // line is now equal to ['bob']
    // name is still equal to 'john'
    return `Currently serving ${name}.`
  }
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
