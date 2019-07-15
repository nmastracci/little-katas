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
  return groceries.reduce((accum: number, curr: IGrocery) => {
    let lineItem = inventory.filter(item => {
      return item.name === curr.lineItem;
    });

    if (curr.amount % 3 === 0) {
      if (curr.lineItem === AvailableGroceries.beer) {
        return accum + (curr.amount / 3) * 4;
      }
    }

    return accum + curr.amount * lineItem[0].price;
  }, 0);
}

export default checkout;
