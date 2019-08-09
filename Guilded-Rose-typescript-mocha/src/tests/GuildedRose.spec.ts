import { expect } from 'chai';
import { describe } from 'mocha';
import Shop from '../Shop';
import { Item } from '../Item';

describe('Guilded Rose Items', () => {
  it('should degrade sellin and quality value by one each day for a normal item', () => {
    const shop = new Shop([{name:'Normal', sellIn:5, quality:5 }]);
    const result = shop.updateQuality()

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(4);
  });

  it('should degrade Quality twice as fast past the sell by date for a normal item', () => {
    const shop = new Shop([{name: 'Normal', sellIn: 0, quality:5}]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Normal');
    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(3);
  });

  it('should not have a quality greater than 50', () => {
    const shop = new Shop([{name: 'Aged Brie', sellIn: 3, quality: 49}]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Aged Brie');
    expect(result[0].quality).to.equal(50);
    expect(result[0].sellIn).to.equal(2);


    const secondResult = shop.updateQuality();

    expect(secondResult[0].name).to.equal('Aged Brie');
    expect(secondResult[0].quality).to.equal(50);
    expect(secondResult[0].sellIn).to.equal(1);

    const thirdResult = shop.updateQuality();

    expect(thirdResult[0].name).to.equal('Aged Brie');
    expect(thirdResult[0].quality).to.equal(50);
    expect(thirdResult[0].sellIn).to.equal(0);
  });

  it('should not have a quality greater than 50 for backstage passes', () => {
    const shop = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 50, quality: 49}]);
    const result = shop.updateQuality();

    expect(result[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].quality).to.equal(50);
    expect(result[0].sellIn).to.equal(49);

    const secondResult = shop.updateQuality();

    expect(secondResult[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(secondResult[0].quality).to.equal(50);
    expect(secondResult[0].sellIn).to.equal(48);

    const thirdResult = shop.updateQuality();

    expect(thirdResult[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
    expect(thirdResult[0].quality).to.equal(50);
    expect(thirdResult[0].sellIn).to.equal(47);
  });

  it('should increase Aged Brie and Backstage Passes quality over time', () => {
    const shop = new Shop([{name: 'Aged Brie', sellIn: 10, quality: 20}, {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 20, quality: 20}]);
    const result = shop.updateQuality();

    const AgedBrie = result.filter(x => x.name === 'Aged Brie');
    const BackstagePasses = result.filter(x => x.name === 'Backstage passes to a TAFKAL80ETC concert');

    expect(AgedBrie[0].quality).to.equal(21);
    expect(AgedBrie[0].sellIn).to.equal(9);
    expect(BackstagePasses[0].quality).to.equal(21);
    expect(BackstagePasses[0].sellIn).to.equal(19);
  });

  it('backstage pass: 10 days or less Quality increases by 2', () => {
    const shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20}]);
    const result = shop.updateQuality()
    expect(result[0].quality).to.equal(22);
  });

  it('backstage pass: 5 days or less Quality increases by 3', () => {
    const shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20}]);
    const result = shop.updateQuality()

    expect(result[0].quality).to.equal(23);
  });

  it('backstage pass: quality is 0 after concert', () => {
    const shop = new Shop([{name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20}]);
    const result = shop.updateQuality()

    expect(result[0].sellIn).to.equal(-1);
    expect(result[0].quality).to.equal(0);
  });

  // TODO: implement solution for conjured items after refactoring
  xit('degrades the quality of Conjured Items twice as fast', () => {
    const shop = new Shop([{name: "Conjured", sellIn: 5, quality: 20}]);
    const result = shop.updateQuality()

    expect(result[0].sellIn).to.equal(4);
    expect(result[0].quality).to.equal(18);
  });



});

