'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');

//unit test for fizzBuzzer function
describe('fizzBuzzer', function () {
  
  it('should return "fizz-buzz" for multiples of 15', function () {
    const normalCases = [15, 30, 45]; 
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return "buzz" for multiples of 5', function () {
    const normalCases = [5, 10, 20];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return "fizz" for multiples of 3', function () {
    const normalCases = [3, 9, 12];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return numbers if not multiple of 3,5, or 15', function () {
    const normalCases = [1,2,4];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });  
  });

  it('should show error if input is not a number', function() {
    const abnormalCases = ['a', true, 'eyebrow'];
    abnormalCases.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});