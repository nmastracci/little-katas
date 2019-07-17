import { AvailableGroceries } from './checkout';

export interface IInventory {
  name: AvailableGroceries;
  price: number;
}

export const inventory = [
  { name: 'bakedBeans', price: 0.2 },
  { name: 'bananas', price: 1.2 },
  { name: 'beer', price: 1.5 },
];

export default inventory;
