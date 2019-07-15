export enum AvailableGroceries {
  bakedBeans,
  bananas,
  beer,
}

export interface IGrocery {
  lineItem: AvailableGroceries;
  amount: number;
}

export function checkout(groceries: IGrocery[]): number {
  return groceries.reduce((accum: number, curr: IGrocery): number => {
    if (curr.lineItem === AvailableGroceries.bakedBeans) {
      accum = +curr.amount * 0.2;
      return accum;
    }
    return accum;
  }, 0);
}

export default checkout;
