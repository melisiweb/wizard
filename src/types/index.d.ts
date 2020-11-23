import * as Items from './items';

export interface MainState {
  items: Items.State
}

export {
  Items
}

export as namespace $;