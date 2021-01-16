const PI = 3.14;
const AJAX_URL = "http://localhost:3000/";

function add(n1, n2) {
  return n1 + n2;
}

let subtraction = (n1, n2) => {
  return n1 - n2;
};

module.exports = {
  PI: PI,
  AJAX_URL: AJAX_URL,

  add: add,
  subtraction: subtraction,
};
