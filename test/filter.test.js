import { expect } from 'chai';
import filter from '../src/filter.js';


describe('filter', function() {
  it('Should return only active products', function() {
    const products = [
      { name: 'Product 1', active: true },
      { name: 'Product 2', active: false },
      { name: 'Product 3', active: true }
    ];
    const result = filter(products, product => product.active);
    expect(result).to.deep.equal([
      { name: 'Product 1', active: true },
      { name: 'Product 3', active: true }
    ]);
  });

  it('Should return an empty array if no products are active', function() {
    const products = [
      { name: 'Product 1', active: false },
      { name: 'Product 2', active: false }
    ];
    const result = filter(products, product => product.active);
    expect(result).to.deep.equal([]);
  });

  it('Should return an empty array if products is null', function() {
    const products = null;
    const result = filter(products, product => product.active);
    expect(result).to.deep.equal([]);
  });

  it('Should return an empty array if predicate is null', function() {
    const products = [
      { name: 'Product 1', active: true },
      { name: 'Product 2', active: false },
      { name: 'Product 3', active: true }
    ];
    const result = filter(products, null);
    expect(result).to.deep.equal([]);
  });

  it('Should return all products if all are active', function() {
    const products = [
      { name: 'Product 1', active: true },
      { name: 'Product 2', active: true }
    ];
    const result = filter(products, product => product.active);
    expect(result).to.deep.equal([
      { name: 'Product 1', active: true },
      { name: 'Product 2', active: true }
    ]);
  });
});
