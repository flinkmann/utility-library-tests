import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', function() {
    it('Shopping carts product quantity is rounded correctly', function() {
        const values = [0, 1, 1.4, 2.5, 3.6];
        const result = values.map((value) => toInteger(value));
        expect(result).to.deep.equal([0, 1, 1, 2, 4]);
    });

    it('Large product quantity values are handled correctly', function() {
        const values = [Number.MAX_VALUE, -Number.MAX_VALUE];
        const result = values.map((value) => toInteger(value));
        expect(result).to.deep.equal([Number.MAX_VALUE, -Number.MAX_VALUE]);
    });

    it('Character is entered as a quantity value', function() {
        const value = '+';
        const result = toInteger(value);
        expect(result).to.be.undefined;
    });
});