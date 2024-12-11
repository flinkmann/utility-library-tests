import { expect } from 'chai';
import add from '../src/add.js';

describe('add', function() {
    it('Adding a zero costing item is handled correctly', function() {
        const value = 100;
        const result = add(value, 0);
        expect(result).to.equal(100);
    });

    it('Large product values should be added correctly', function() {
        const value = 100;
        const value2 = add(value, Number.MAX_VALUE);
        const result = add(value2, -Number.MAX_VALUE);
        expect(result).to.equal(100);
    });

    it('Total cart value should round correctly', function() {
        const value = 100;
        const value2 = add(value, 10.2);
        const value3 = add(value2, 89.8);
        const value4 = add(value3, -49.5);
        const result = add(value4, -50.5);
        expect(result).to.equal(100);
    });

    it('Should add only numerical values together', function() {
        const value = 100;
        const result = add(value,'a');
        expect(result).to.be.undefined;
    });
});