export type List = Array<ItemPayload> | null;
export interface State {
  list: List
  current: Item,
  review: $.Reviews.Review,
}

export interface ItemPayload {
  id: string | number,
  title: string,
  description: string,
  shortDescription: string
  reviews: any
}
export type Item = ItemPayload | null

export interface ItemCardProps {
  item: Item
  isDetailView?: boolean
}

export interface ItemParams {
  itemId: string
}