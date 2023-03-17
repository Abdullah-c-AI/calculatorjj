let expression = "";

function insert(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("display").value = expression;
}

function calculate() {
  let result = eval(expression);
  expression = result.toString();
  document.getElementById("display").value = expression;
}
