import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item } from '../Item';
import { constants } from '../definition';

describe('Guilded Rose Items', () => {
  it('correctly addresses a normal item', () => {
    // const item = new Item(constants.normal, 5, 5 )
    const shop = new Shop([{name: constants.normal, sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal(constants.normal);
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });

  it('degrades quality twice as fast past the sellIn date', () => {
    const shop = new Shop([{ name: constants.normal, sellIn: 0, quality: 5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal(constants.normal);
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(3);
  });

  it('quality cannot be greater than 50', () => {
    const shop = new Shop([{ name: constants.brie, sellIn: 10, quality: 50 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal(constants.brie);
    expect(result[0].sellIn).to.equal(9);
    expect(result[0].quality).to.equal(50);
  });

  it('Aged Brie increases in quality over time', () => {
    const shop = new Shop([{ name: constants.brie, sellIn: 10, quality: 49 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal(constants.brie);
    expect(result[0].sellIn).to.equal(9);
    expect(result[0].quality).to.equal(50);
  });

  it('Sulfuras has no SellIn date and never decreases in Quality', () => {
    const shop = new Shop([{ name: constants.sulfuras, sellIn: 7, quality: 49 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal(constants.sulfuras);
    expect(result[0].sellIn).to.equal(7);
    expect(result[0].quality).to.equal(49);
  });

  xit('Backstage pass increases in quality by 2, as sellIn value approaches 10', () => {
    const passes = []
    //expect();
  })

});

