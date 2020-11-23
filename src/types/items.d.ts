export interface ListObject {
  [key: string]: Item
}

export type List = ListObject | null;

export interface State {
  list: List
}

export interface Item {
  id: string | number,
  title: string,
  description: string,
  shortDescription: string
  reviews: any
}

export interface ItemCardProps {
  item: Item | null
  isDetailView?: boolean
}

export interface ItemParams {
  itemId: string
}