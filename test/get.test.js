const { expect } = require('chai');
const get = require('../path/to/your/get'); // Adjust the path to your get function

describe('get', function() {
  it('should return the product with the given ID', function() {
    const products = [
      { id: 1, name: 'Product 1', active: true },
      { id: 2, name: 'Product 2', active: false },
      { id: 3, name: 'Product 3', active: true }
    ];
    const result = get(products, 2);
    expect(result).to.deep.equal({ id: 2, name: 'Product 2', active: false });
  });

  it('should return undefined if the product ID does not exist', function() {
    const products = [
      { id: 1, name: 'Product 1', active: true },
      { id: 2, name: 'Product 2', active: false }
    ];
    const result = get(products, 3);
    expect(result).to.be.undefined;
  });

  it('should return the first product if multiple products have the same ID', function() {
    const products = [
      { id: 1, name: 'Product 1', active: true },
      { id: 1, name: 'Product 2', active: false }
    ];
    const result = get(products, 1);
    expect(result).to.deep.equal({ id: 1, name: 'Product 1', active: true });
  });
});
