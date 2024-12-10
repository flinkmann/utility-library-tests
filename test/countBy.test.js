const { expect } = require('chai');
const countBy = require('../src/countBy.js');

describe('countBy', function() {
  it('should count elements by the given criterion', function() {
    const products = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ];
    const result = countBy(products, product => product.category);
    expect(result).to.deep.equal({ fruit: 2, vegetable: 1 });
  });

  it('should return an empty object if the array is empty', function() {
    const products = [];
    const result = countBy(products, product => product.category);
    expect(result).to.deep.equal({});
  });

  it('should handle arrays with one element', function() {
    const products = [{ category: 'fruit', name: 'apple' }];
    const result = countBy(products, product => product.category);
    expect(result).to.deep.equal({ fruit: 1 });
  });

  it('should handle different types of criteria', function() {
    const products = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ];
    const result = countBy(products, product => product.name.length);
    expect(result).to.deep.equal({ 5: 2, 6: 1 });
  });
});
