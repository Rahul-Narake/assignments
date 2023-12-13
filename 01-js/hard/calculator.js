/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result = 0;
  constructor() {
    this.result = 0;
  }

  add = (num) => {
    this.result = this.result + num;
    return this.result;
  };
  subtract = (num) => {
    this.result = this.result - num;
    return this.result;
  };
  multiply = (num) => {
    this.result = this.result * num;
    return this.result;
  };
  divide = (num) => {
    if (num != 0) {
      this.result = this.result / num;
      return this.result;
    } else {
      throw new Error('cannot divide by zero');
    }
  };
  clear = () => {
    this.result = 0;
  };

  getResult = () => {
    return this.result;
  };

  calculate(expression) {
    // Remove extra spaces and validate the expression
    const cleanedExpression = expression.replace(/\s+/g, '').trim();
    // if (!/^[0-9+\-*/\(\) ]+$/.test(cleanedExpression)) {
    //   throw new Error('Invalid characters in the expression');
    // }

    // Evaluate the expression using eval
    try {
      this.result = eval(cleanedExpression);
      if (isNaN(this.result) || !isFinite(this.result)) {
        throw new Error('Invalid expression');
      }
    } catch (error) {
      throw new Error('Error evaluating the expression');
    }
  }
}

// let calc = new Calculator();
// console.log(calc.add(5));

module.exports = Calculator;
