import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact', function() {
  it('should remove all falsy values from the array', function() {
    const array = [0, 1, false, 2, '', 3];
    const result = compact(array);
    expect(result).to.deep.equal([1, 2, 3]);
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
