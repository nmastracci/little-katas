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

  it('Should degrade twice as fast if item is past its sell-by date', () => {
    const shop = new Shop([{name:'Normal', sellIn:-1, quality: 6}])
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(-2);
    expect(result[0].quality).to.equal(4);
  })

  it('No item\'s quality should be greater than 50', () => {
    const shop = new Shop([{name: 'Aged Brie', sellIn:5, quality:49}])

    let result =  shop.updateQuality();
    expect(result[0].name).to.equal('Aged Brie');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(50);

    result = shop.updateQuality();
    expect(result[0].sellIn).to.equal(3);
    expect(result[0].quality).to.equal(50);
  })

  it('Aged Brie increases in quality over time', () => {
    const shop = new Shop([{name: 'Aged Brie', sellIn:5, quality:20}])

    let result =  shop.updateQuality();
    expect(result[0].name).to.equal('Aged Brie');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(21);
  })

  it('Sulfuras has no SellIn date and never decreases in quality', () => {
    const shop = new Shop([{name: 'Sulfuras, Hand of Ragnaros', sellIn: 5, quality:20}])

    let result =  shop.updateQuality();
    expect(result[0].name).to.equal('Sulfuras, Hand of Ragnaros');
    expect(result[0].sellIn).to.equal(5);
    expect(result[0].quality).to.equal(20);
  })

  it('Backstage Passes increase in quality by 2 as SellIn value approaches 10 days or less', () => {
    const shop = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality:20}]);

    let result =  shop.updateQuality();
    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(9);
    expect(result[0].quality).to.equal(22);

    result = shop.updateQuality();
    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(8);
    expect(result[0].quality).to.equal(24);
  })

  it('Backstage Passes increase in quality by 3 as SellIn value approaches 5 days or less', () => {
    const shop = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality:20}]);

    let result =  shop.updateQuality();
    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(23);

    result = shop.updateQuality();
    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(3);
    expect(result[0].quality).to.equal(26);
  });

  it('Backstage passes quality drops to zero after the concert', () => {
    const shop = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality:20}]);

    const result =  shop.updateQuality();
    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(0);

  });
});

