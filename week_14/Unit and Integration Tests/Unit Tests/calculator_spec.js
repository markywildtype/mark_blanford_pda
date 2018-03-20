var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should register a number has been clicked', function(){
    calculator.numberClick(4);
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 4);
  });

  it('should register an operator button has been clicked', function(){
    calculator.operatorClick('*');
    const expected = calculator.previousOperator;
    assert.strictEqual(expected, '*');
  });

  // multiply 3x5 and get 15
  it('should be able to multiply two numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 15);
  });

  // divide 21/7 and get 3
  it('should be able to divide two numbers', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 3);
  });

  // add 1+4 and get 5
  it('should be able to add two numbers', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 5);
  });

  // subtract 7-4 and get 3
  it('should be able to subtract two numbers', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 3);
  });

  // concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(4);
    calculator.numberClick(3);
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 743);
  });

  // chain multiple operations together
  it('should chain multiple operations', function(){
    calculator.numberClick(12);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const expected = calculator.runningTotal;
    assert.strictEqual(expected, 16);
  });

  // clear the running total without affecting the calculation

  it('should zero the running total when the clear button is clicked', function(){
    calculator.numberClick(12);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    const expected1 = calculator.runningTotal;
    const expected2 = calculator.previousTotal;
    assert.strictEqual(expected1, 0);
    assert.strictEqual(expected2, 4);
  });

});
