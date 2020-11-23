import * as types from '@app/actions/items/types';

/**
 * @type {$.Items.State}
 */
const initialState = {
  list: null,
};

/**
 *
 * @param {$.Items.State} state
 * @param {*} param1
 */
const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ITEMS_LIST:
      return {
        ...state,
        list: payload,
      };

    case types.ADD_LIST_ITEM: {
      const list = state.list || {};

      return {
        ...state,
        list: {
          ...list,
          [payload.id]: payload,
        },
      };
    }
    case types.ADD_ITEM_REVIEW: {
      const list = state.list || {};
      return {
        ...state,
        list: {
          ...list,
          [payload.itemId]: {
            ...list[payload.itemId],
            reviews: {
              ...list[payload.itemId].reviews,
              [payload.review.id]: payload.review,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export default reducers;