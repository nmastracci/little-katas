import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AvailableGroceries, checkout } from '../checkout';

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

  it('should price one bag of bananas correctly', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bananas, amount: 1 },
    ]);
    expect(result).to.equal(1.2);
  });

  it('should price one bottle of beer correctly', () => {
    const result = checkout([{ lineItem: AvailableGroceries.beer, amount: 1 }]);
    expect(result).to.equal(1.5);
  });

  it('should provide the correct total for multiple items', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bakedBeans, amount: 1 },
      { lineItem: AvailableGroceries.bananas, amount: 1 },
      { lineItem: AvailableGroceries.beer, amount: 1 },
    ]);
    expect(result).to.equal(2.9);
  });

  it('should apply the beer deal', () => {
    const result = checkout([{ lineItem: AvailableGroceries.beer, amount: 3 }]);
    expect(result).to.equal(4);
  });

  it('should apply the beer deal twice', () => {
    const result = checkout([{ lineItem: AvailableGroceries.beer, amount: 6 }]);
    expect(result).to.equal(8);
  });

  xit('should apply the baked beans deal', () => {
    const result = checkout([
      { lineItem: AvailableGroceries.bakedBeans, amount: 3 },
    ]);
    expect(result).to.equal(0.4);
  });
});
