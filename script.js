let dice = {};
let min = 1;
let max = 6;
let resultStr = '';
let total = 0;
var results = document.getElementById('results');

(function run() {
  for (var i = 1; i <= 2; i++) {
    dice[i] = getRndNumber();
  }
  setResult(dice);

  isNumbersEqual(dice);
  getDifference(dice);
  getTotal(dice);
  
  printResult(resultStr);
  
})();

function getRndNumber() {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function isNumbersEqual(diceObj) {
  var eq = (diceObj[1] == diceObj[2]) ? '' : 'not';
  var str = 'Results are '+ eq +  ' equal';
  setResult(str);
}

function getDifference(diceObj) {
  var diff = Math.abs(diceObj[1] - diceObj[2]);
  var str = 'Difference is ' + diff;
  setResult(str);
}

function getTotal(diceObj) {
  total = diceObj[1] + diceObj[2];
  var str = 'Total is ' + total;
  setResult(str);
}

function setResult(result) {
  if ('object' === typeof(result)) {
    for (var i = 1; i <= 2; i++) {
      resultStr += 'Dice '+ i +  ': ' + result[i] + '<br />';
    }
  } else {
    resultStr += result + '<br />';
  }
}

function printResult(outputStr) {
  results.innerHTML = outputStr;
}