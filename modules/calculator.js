let calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

console.log(calculator.add(3, 2));
console.log(calculator.sub(3, 2));
console.log(calculator.mul(3, 2));
console.log(calculator.div(3, 2));

// 객체 리터럴 : 객체를 생성하기 위한 표기법