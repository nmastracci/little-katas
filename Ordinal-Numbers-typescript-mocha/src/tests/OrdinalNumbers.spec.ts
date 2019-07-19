import { expect } from 'chai';
import Digit from '../OrdinalNumbers';

describe('Making a Number Ordinal', () => {
  it('turns 1 into 1st', () => {
    const digit = new Digit(1);
    const result = digit.makeOrdinal();

    expect(result).to.equal('1st');
  });
});
