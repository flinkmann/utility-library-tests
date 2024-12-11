import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact', function() {
  it('the first and last value is false', function() {
    const array = [0, 1, false, 1, '', 0];
    const result = compact(array);
    expect(result).to.deep.equal([1, 1]);
  });

  it('the first and last value is true', function() {
    const array = [true, 0, false, 2, '', 1];
    const result = compact(array);
    expect(result).to.deep.equal([1, 2, 1]);
  });

  it('should filter a random array of trues and falses, 3 first ones are false', function() {
    const array = [0, 0, 0, 2, false, 3, '', 5];
    const result = compact(array);
    expect(result).to.deep.equal([2, 3, 5]);
  });

  it('should return an empty array if all values are falsy', function() {
    const array = [0, false, null, undefined, '', NaN];
    const result = compact(array);
    expect(result).to.deep.equal([]);
  });

  it('should return the same array if no values are falsy', function() {
    const array = [1, 2, 3];
    const result = compact(array);
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should handle an empty array', function() {
    const array = [];
    const result = compact(array);
    expect(result).to.deep.equal([]);
  });
});
