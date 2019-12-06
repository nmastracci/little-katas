import { IItem } from "./Item";

export default class Shop {
  items: IItem[]
  constructor(items: IItem[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') {
          this.decreaseQuality(item);
        }
      } else {
        if (item.quality < 50) {
          this.increaseQuality(item);
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              this.increaseQuality(item)
            }
            if (item.sellIn < 6) {
                this.increaseQuality(item)
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') {
              this.decreaseQuality(item);
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else if (item.quality < 50) {
          this.increaseQuality(item);
        }
      }
    }

    return this.items;
  }


  private increaseQuality(item: IItem, change: number = 1) {
    item.quality += change; 
  };
  private decreaseQuality(item: IItem, change: number = 1) {
    item.quality -= change; 
  };
}

