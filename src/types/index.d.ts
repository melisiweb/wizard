import * as Items from './items';
import * as Reviews from './reviews';

export interface MainState {
  items: Items.State
}

export {
  Items,
  Reviews,
}

export as namespace $;