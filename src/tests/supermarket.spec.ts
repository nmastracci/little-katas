import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AvailableGroceries, checkout } from './../supermarket';

// Prices and Sales
// bakedBeans: 0.20 per can and 3 for 2,
// bananas 1.20 per bag
// beer 1.50/bottle and 3 for $4

describe('Super Market', () => {
  it('should price one can of baked beans correctly', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bakedBeans, amount: 1 },
    ]);
    expect(result).to.equal(0.2);
  });

  xit('should price one bag of bananas correctly', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bananas, amount: 1 },
    ]);
    expect(result).to.equal(1.2);
  });

  xit('should price one bottle of beer correctly', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bananas, amount: 1 },
    ]);
    expect(result).to.equal(1.5);
  });
});
