var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  //   - Do the number buttons work to update the display of the running total?


  //   - Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should update the display with the result when multiplication is performed', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('21')
  });

  it('should update the display with the result when division is performed', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should update the display with the result when addition is performed', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  });

  it('should update the display with the result when subtraction is performed', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

  //   - Can we chain multiple operations together?
  it('should chain together multiple operations - 1', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('30')
  });

  it('should chain together multiple operations - 2', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('16')
  });

  //   - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
  it('should work as expected with negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-6')
  });

  it('should work as expected with decimals', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3.3333333333333335')
  });

  it('should work as expected with large numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click()
    element(by.css('#number5')).click()
    element(by.css('#number0')).click()
    element(by.css('#number1')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click()
    element(by.css('#number2')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('490827')
  });

  // What does the code do in exceptional circumstances?
  //
  //   - If you divide by zero, what is the effect?
  // it('should return "Infinity" if dividing by zero', function(){
  //   running_total = element(by.css('#running_total'));
  //   element(by.css('#number5')).click()
  //   element(by.css('#operator_divide')).click()
  //   element(by.css('#number0')).click()
  //   element(by.css('#operator_equals')).click()
  //   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  // });

  //   - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
  it('should return "Cannot divide by zero!" if dividing by zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Cannot divide by zero!')
  });


});
