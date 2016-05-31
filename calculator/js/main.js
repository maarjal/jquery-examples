var add = function(computers, personatComputer, cost) {
  return computers * personatComputer * cost;
};

var computers = parseInt(prompt("How many computers?"));
var personatComputer = parseInt(prompt("How many people per computer?"));
var cost = parseInt(prompt("How much does the full course cost?"));



var result = add(computers, personatComputer, cost);
alert(result);


var substract = function(num1, num2) {
  return num1 - num2;
}

var newResult = substract(5, 3);
alert(newResult);
