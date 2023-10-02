let output = `The variable value is '${input_var}'.\nIts type is '`;
if (typeof input_var === 'string') {
  output += 'String';
} else if (typeof input_var === 'boolean') {
  output += 'Boolean';
} else if (Number.isInteger(input_var)) {
  output += 'Integer';
} else if (typeof input_var === 'number') {
  output += 'Float';
}
output += "'.";

if (input_var === 42) {
  output += "\nIt is the meaning of life.";
}

displayThisText(output)
