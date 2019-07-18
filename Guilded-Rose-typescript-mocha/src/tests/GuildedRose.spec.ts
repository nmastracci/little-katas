import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item } from '../Item';

describe('Guilded Rose Items', () => {
  it('correctly addresses a normal item', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });
});

