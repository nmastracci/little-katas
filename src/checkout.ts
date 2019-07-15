import { inventory } from './inventory';

export enum AvailableGroceries {
  bakedBeans = 'bakedBeans',
  bananas = 'bananas',
  beer = 'beer',
}

export interface IGrocery {
  lineItem: AvailableGroceries;
  amount: number;
}

export function checkout(groceries: IGrocery[]): number {
  return groceries.reduce((accum: number, curr: IGrocery): number => {
    let lineItem = inventory.filter(item => {
      return item.name === curr.lineItem;
    });

    accum = +curr.amount * lineItem[0].price;
    return accum;
  }, 0);
}

export default checkout;
