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
  
  it('it should degrade twice as fast if past sell by date', () => {
    const shop = new Shop([{name:'Normal', sellIn:0, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(3);
  });

  it(' should fail when Quality value is greater than 50', () => {
    const err = new Error();
    const shop = new Shop([{name:'Normal', sellIn:0, quality:75 }]);


    // expect(shop.updateQuality()).throws(err);
    // expect(result[0].name).to.equal('Normal');
    // expect(result[0].sellIn).to.equal(-1);
    // expect(result[0].quality).to.equal(3);
  })

  it('should increase the Quality value for "Aged Brie" over time', () => {
    const shop = new Shop([{name:'Aged Brie', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Aged Brie');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(6);
  })

  it('should not decrese the Quality value for "Sulfuras" and has no sellin date', () => {
    const shop = new Shop([{name:'Sulfuras, Hand of Ragnaros', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Sulfuras, Hand of Ragnaros');
    // expect(result[0].sellIn).to.equal(5);
    expect(result[0].quality).to.equal(5);
  })

  describe('Backstage passes', () => {
    it('should increase in quality by 2 as sellin value approaches (<= 10 days)', () => {
      const shop = new Shop([{name:'Backstage passes to a TAFKAL80ETC concert', sellIn:10, quality:10 }]);
      const result = shop.updateQuality()
  
      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(12);
    })

    it('should increase in quality by 2 as sellin value approaches (<= 5 days)', () => {
      const shop = new Shop([{name:'Backstage passes to a TAFKAL80ETC concert', sellIn:5, quality:10 }]);
      const result = shop.updateQuality()
  
      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(4);
      expect(result[0].quality).to.equal(13);
    })

    it('should ', () => {
      const shop = new Shop([{name:'Backstage passes to a TAFKAL80ETC concert', sellIn:0, quality:10 }]);
      const result = shop.updateQuality()
  
      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(-1);
      expect(result[0].quality).to.equal(0);
    });
  });
  it.skip('it should degrade a conjured item in quality twice as fast as normal item', () => {
    const shop = new Shop([{name:'Conjured', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Conjured');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(3);
  });
});

