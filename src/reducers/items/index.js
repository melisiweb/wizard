import * as types from '@app/actions/items/types';

/**
 * @type {$.Items.State}
 */
const initialState = {
  list: null,
  current: null,
  review: null,
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

    case types.SET_CURRENT_ITEM: {

      return {
        ...state,
        current: payload,
      };
    }

    case types.SET_REVIEW: {
      const review = payload ? { ...state.review, ...payload } : null;

      return {
        ...state,
        review,
      };
    }

    default:
      return state;
  }
};

export default reducers;