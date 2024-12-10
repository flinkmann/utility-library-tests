import { expect } from 'chai';
import get from '../src/get.js';

describe('get', function() {
  it('should return the value at the specified path', function() {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).to.equal(3);
  });

  it('should return the value at the specified path, case 2', function() {
    const object = { 'a': [{ 'b': { 'c': 3 } }, {'d' : { 'c': 4 }}] };
    const result = get(object, 'a[1].d.c');
    expect(result).to.equal(4);
  });

  it('should return the value at the specified path, case 3', function() {
    const object = { 'a': [{ 'b': [{ 'c': 3 }, {'e' : 5}] }, {'d' : { 'c': 4 }}] };
    const result = get(object, 'a[0].b[1].e');
    expect(result).to.equal(5);
  });

  it('should return the value at the specified path when path is an array', function() {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).to.equal(3);
  });

  it('should return the value at the specified path when path is an array, case 2', function() {
    const object = { 'a': [{ 'b': [{ 'c': 3 }, {'e' : 5}] }, {'d' : { 'c': 4 }}] };
    const result = get(object, ['a', '0', 'b', '1', 'e']);
    expect(result).to.equal(5);
  });

  it('should return the default value if the resolved value is undefined', function() {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  it('should return undefined if the object is null or undefined', function() {
    const result = get(null, 'a.b.c');
    expect(result).to.be.undefined;
  });

  it('should handle an empty path', function() {
    const object = { 'a': 1 };
    const result = get(object, '');
    expect(result).to.be.undefined;
  });
});

