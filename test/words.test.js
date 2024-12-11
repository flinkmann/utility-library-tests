import { expect } from 'chai';
import words from '../src/words.js';

describe('words', function() {
    it('Search keywords can be correctly split into an array', function() {
        const value = 'keyword1 keyword2 keyword3';
        const result = words(value);
        expect(result).to.deep.equal(['keyword1', 'keyword2', 'keyword3']);
    });

    it('No keywords are searched', function() {
        const value = '';
        const result = words(value);
        expect(result).to.deep.equal([]);
    });

    it('Search contains numbers', function() {
        const value = 'keyword 1 2';
        const result = words(value);
        expect(result).to.deep.equal(['keyword', '1', '2']);
    });

    it('Search contains characters', function() {
        const value = 'keyword & keyword';
        const result = words(value);
        expect(result).to.deep.equal(['keyword', 'keyword']);
    });
});