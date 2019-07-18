export interface IItem {
  name: string;
  sellIn: number;
  quality: number;
}

export class Item implements IItem {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name:string, sellIn:number, quality: number){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
