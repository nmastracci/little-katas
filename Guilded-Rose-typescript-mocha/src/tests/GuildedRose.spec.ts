import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item } from '../Item';

describe('Guilded Rose Items', () => {
  it('correctly addresses a normal item', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:5, quality:5 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });

  it('correctly degrades a normal item quality when past sellIn date', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:0, quality:5 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(3);
  });

  it('can not have quality greater than 50', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:5, quality:51 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(50);
  });

  it('increases in quality over time if it is Aged Brie', () => {
    const shop = new Shop([{name:'Aged Brie', sellIn:5, quality:40 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Aged Brie');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.be.greaterThan(40);
  });

  it('Sulfuras, has no SellIn date and never decreases in Quality', () => {
    const shop = new Shop([{ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 40 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(result[0].sellIn).to.equal(0);
    expect(result[0].quality).to.equal(40);
  });

  it('generally increases quality as sellin value approaches for Backstage passes', () => {
    const shop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 40 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(14);
    expect(result[0].quality).to.equal(41);
  });

  it('increases quality by two if sellIn date is 10 or lower', () => {
    const shop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 40 }]);
    let result = shop.updateQuality();

    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(10);
    expect(result[0].quality).to.equal(41);
    shop.updateQuality();
    expect(result[0].quality).to.equal(43);
    expect(result[0].sellIn).to.equal(9);
    
  });

  it('increases quality by three if sellIn date is 5 or lower', () => {
    const shop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 40 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(43);
  });

  it('sets quality to zero if sellIn is lower than 0', () => {
    const shop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 40 }]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(0);
  });
});

