import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith', function() {
    it('Email addresses character positions can be checked', function() {
        const value = "test@test.t";
        const result = [endsWith(value, '@', 5), endsWith(value, '@', 4), endsWith(value, '.', 10)];
        expect(result).to.deep.equal([true, false, true]);
    });

    it('Phone numbers start character can be checked', function() {
        const value = '+358123456789';
        const result = endsWith(value, '+', 1);
        expect(result).to.equal(true);
    });

    it('Empty value is given as a phone number', function() {
        const value = '';
        const result = endsWith(value, '+', 1);
        expect(result).to.equal(false);
    });
});