import { IItem } from "./Item";

export default class Shop {
  items: IItem[]
  constructor(items: IItem[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (!this.isAgedBrie(i) && !this.isBackStagePass(i)) {
        if (this.items[i].quality > 0) {
          if (!this.isSulfuras(i)) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.increaseQuality(this.items[i]);
          if (this.isBackStagePass(i)) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseQuality(this.items[i]);
              }
            }
          }
        }
      }


      if (!this.isSulfuras(i)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }


      if (this.items[i].sellIn < 0) {
        if (!this.isAgedBrie(i)) {
          if (!this.isBackStagePass(i)) {
            if (this.items[i].quality > 0) {
              if (!this.isSulfuras(i)) {
                this.decreaseQuality(this.items[i]);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQuality(this.items[i]);
          }
        }
      }


    }

    return this.items;
  }

  private isStandardItem(i: number) {
    return !this.isAgedBrie(i) && !this.isSulfuras(i) && !this.isBackStagePass(i);
  }

  private isAgedBrie(i: number) {
    return this.items[i].name === 'Aged Brie';
  }

  private isSulfuras(i: number) {
    return this.items[i].name === 'Sulfuras, Hand of Ragnaros';
  }

  private isBackStagePass(i: number) {
    return this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  private handleAgedBrie(item) {
    // TODO
  }


  increaseQuality(item: IItem, amount: number = 1): void {
    item.quality += amount;
  }

  decreaseQuality(item: IItem, amount: number = 1): void {
    item.quality -= amount;
  }
}

