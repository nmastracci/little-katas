import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item, IItem } from '../Item';

describe('Guilded Rose Items', () => {

  it('correctly addresses a normal item', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });

  it('degrages quality degrades twice as fast past sellin date', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{ name: 'Normal', sellIn: 0, quality: 10 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(8);
  });


  describe("cannot have a quality greater than 50", () => {
    it('when quality is 49', () => {
      let shop = new Shop([{ name: 'Normal', sellIn: 10, quality: 49 }]);
      const result = shop.updateQuality()

      expect(result[0].name).to.equal('Normal');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(48);
    });

    it('when quality is 50', () => {
      let shop = new Shop([{ name: 'Normal', sellIn: 10, quality: 50 }]);
      const result = shop.updateQuality()

      expect(result[0].name).to.equal('Normal');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(49);
    });
    it('when quality is 51', () => {
      const shop = new Shop([new Item('Normal', 10, 51 )]);
      const result = shop.updateQuality()

      expect(result[0].name).to.equal('Normal');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(50);
    });
  });

  describe('Aged Brie increases in Quality over time', () => {
    it('when quality is inside bounds', () => {
      const shop = new Shop([new Item('Aged Brie', 10, 10)]);
      const result = shop.updateQuality()

      expect(result[0].name).to.equal('Aged Brie');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(11);
    });

    it('when quality is out of bounds', () => {
      const shop = new Shop([new Item('Aged Brie', 10, 50)]);
      const result = shop.updateQuality()

      expect(result[0].name).to.equal('Aged Brie');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(50);
    });
  });

  it('Sulfuras has no SellIn date and never decreases in Quality', () => {
    const shop = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 50)]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(result[0].sellIn).to.equal(10);
    expect(result[0].quality).to.equal(50);
  });

  describe('Backstage Passes increase in Quality as SellIn value approaches', () => {
    it('Backstage Passes Quality increases by 2 when it is <10 >5',() => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)]);
      let result = shop.updateQuality()

      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(10);
      expect(result[0].quality).to.equal(21);

      result = shop.updateQuality()

      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(9);
      expect(result[0].quality).to.equal(23);
    });

    it('Backstage Passes Quality increases by 2 when it is <5 >0', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20)]);
      let result = shop.updateQuality()

      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(5);
      expect(result[0].quality).to.equal(22);

      result = shop.updateQuality()

      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(4);
      expect(result[0].quality).to.equal(25);
    });

    it('Quality drops to 0 after the concert', () => {
      const shop = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      let result = shop.updateQuality()

      expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
      expect(result[0].sellIn).to.equal(-1);
      expect(result[0].quality).to.equal(0);
    })
  });

  describe('Conjured items degrade in quality twice as fast as normal items', () => {
    // TODO
  });
});

