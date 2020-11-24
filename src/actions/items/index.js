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
export const setCurrentItem = (item) => ({
  type: types.SET_CURRENT_ITEM,
  payload: item,
});

/**
 * @param {$.Reviews.ReviewPayload} review
 */
export const setReview = (review) => ({
  type: types.SET_REVIEW,
  payload: review,
});