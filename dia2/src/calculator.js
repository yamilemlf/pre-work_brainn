//function calculadora (callback) {}

function calculadora(fun, a, b) {
  return fun(a, b)
}

function sum(a, b) {return a + b}
function sub(a, b) {return a - b}
function mult(a, b) {return a * b}
function div(a, b) {return a / b}

export {
  calculadora,
  sum,
  sub,
  mult,
  div,
};
