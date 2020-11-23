import * as types from './types';

/**
 * @param {$.Items.List} list
 */
export const setItemsList = (list) => ({
  type: types.SET_ITEMS_LIST,
  payload: list,
});

/**
 * @param {$.Items.Item} item
 */
export const addListItem = (item) => ({
  type: types.ADD_LIST_ITEM,
  payload: item,
});