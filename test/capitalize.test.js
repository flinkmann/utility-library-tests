import { expect } from "chai"
import capitalize from "../src/capitalize.js"

describe('capitalize', function() {
    it('Order forms fields can be correctly capitalized', function() {
        const values = ['name', 'Name', 'CITY', 'CoUnTrY'];
        const result = values.map((value) => capitalize(value));
        expect(result).to.deep.equal(['Name', 'Name', 'City', 'Country']);
    });

    it('Order form field contains multiple words', function() {
        const value = 'two words';
        const result = capitalize(value);
        expect(result).to.equal('Two Words');
    });

    it('Field with no characters is tried to capitalize', function() {
        const value = '';
        const result = capitalize(value);
        expect(result).to.equal('');
    });

    it('Numbers and values that cannot be capitalized', function() {
        const values = ['1word', 0, 1, -1];
        const result = values.map((value) => capitalize(value));
        expect(result).to.deep.equal(['1word', '0', '1', '-1']);
    });
});