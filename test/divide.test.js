import { expect } from 'chai';
import divide from '../src/divide.js';


describe('divide', function() {
  it('should return the quotient of two positive numbers', function() {
    const result = divide(6, 3);
    expect(result).to.equal(2);
  });

  it('should return the quotient of two negative numbers', function() {
    const result = divide(-6, -3);
    expect(result).to.equal(2);
  });

  it('should return a negative quotient for a positive and a negative number', function() {
    const result = divide(6, -3);
    expect(result).to.equal(-2);
  });

  it('should return 0 when the numerator is 0', function() {
    const result = divide(0, 3);
    expect(result).to.equal(0);
  });

  it('should throw an error when dividing by 0', function() {
    expect(() => divide(6, 0)).to.throw();
  });

  it('should handle floating point numbers: positive floats', function() {
    const result = divide(7.5, 2.5);
    expect(result).to.equal(3);
  });

  it('should handle floating point numbers: positive and negative float', function() {
    const result = divide(7.5, -2.5);
    expect(result).to.equal(-3);
  });

  it('should handle floating point numbers: both negative', function() {
    const result = divide(-7.5, -2.5);
    expect(result).to.equal(3);
  });
});
