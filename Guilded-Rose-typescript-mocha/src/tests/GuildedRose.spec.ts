import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item } from '../Item';

describe('Guilded Rose Items', () => {
  it('should degrade sellin and quality value by one each day for a normal item', () => {
    // const item = new Item('Normal', 5, 5 )
    const shop = new Shop([{name:'Normal', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });

  it('should not have a quality greater than 50', () => {
    const shop50 = new Shop([{name: 'Aged Brie', sellIn: 1, quality: 50}]);
    const oneDayOn50 = shop50.updateQuality();

    expect(oneDayOn50[0].quality).to.equal(50);

  });

  it('should not have a quality greater than 50 for backstage passes', () => {
    const shop50 = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 50, quality: 50}]);
    const oneDayOn50 = shop50.updateQuality();

    expect(oneDayOn50[0].quality).to.equal(50);

  });

  it('backstage pass: 10 days or less Quality increases by 2', () => {
    const shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20}]);
    const result = shop.updateQuality()
    expect(result[0].quality).to.equal(22);
  });

  it('backstage pass: 10 days or more Quality increases by 1', () => {
    let shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 20}]);
    let result = shop.updateQuality()
    expect(result[0].quality).to.equal(21);

    shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 20}]);
    result = shop.updateQuality()
    expect(result[0].quality).to.equal(21);

  });

  it('backstage pass: 5 days or less Quality increases by 3', () => {
    const shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20}]);
    const result = shop.updateQuality()

    expect(result[0].quality).to.equal(23);

    // shop[0].sellIn = 5;



  });

});

