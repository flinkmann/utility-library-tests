import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', function() {
  it('should count elements as expected by the example, case 1', function() {
    const products = [
      { 'origin': 'Poland', 'category': 'apple' },
      { 'origin': 'Italy', 'category': 'apple' },
      { 'origin': 'Brazil', 'category': 'orange' }
    ];
    const result = countBy(products, value => value.category);
    expect(result).to.deep.equal({ 'apple': 2, 'orange': 1 });
  });

  it('should count elements as expected by the example, case 2', function() {
    const products = [
      { 'origin': 'Poland', 'category': 'apple' },
      { 'origin': 'Poland', 'category': 'strawberry' },
      { 'origin': 'Brazil', 'category': 'orange' }
    ];
    const result = countBy(products, value => value.origin);
    expect(result).to.deep.equal({ 'Poland': 2, 'Brazil': 1 });
  });

  it('should return an empty object if the array is empty', function() {
    const products = [];
    const result = countBy(products, value => value.category);
    expect(result).to.deep.equal({});
  });

  it('should handle arrays with one element', function() {
    const products = [{ category: 'fruit', name: 'apple' }];
    const result = countBy(products, value => value.category);
    expect(result).to.deep.equal({ fruit: 1 });
  });

  it('should handle different types of criteria', function() {
    const products = [
      { 'origin': 'Poland', 'category': 'apple' },
      { 'origin': 'Italy', 'category': 'apple' },
      { 'origin': 'Brazil', 'category': 'orange' }
    ];
    const result = countBy(products, value => value.category.length);
    expect(result).to.deep.equal({ 5: 2, 6: 1 });
  });
});
