var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  // our line is katzDeliLine and the person coming in the line is newName
  // katzDeliLine is an array, example: ['john']
  // takeANumber(katzDeliLine, "bob")
  // we expect katzDeliLine to equal ['john', 'bob']
  // we expect to be returned to us "Welcome, Bob. You are number 2. in line."
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
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
