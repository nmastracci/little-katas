import { expect } from 'chai';
import { describe, it } from 'mocha';
import hello from './../supermarket';

describe('Super Market', () => {
  it('should run the hello function', () => {
    const result = hello();
    expect(result).to.equal('Hello World!');
  });
});
