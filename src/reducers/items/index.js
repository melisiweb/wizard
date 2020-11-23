const initialState = {
  list: {
    1: {
      title: 'Item title',
      description: 'Item description',
      reviews: {},
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        list: {
          ...state.list,
          [payload.itemId]: {
            ...state.list[payload.itemId],
            reviews: {
              ...state.list[payload.itemId].reviews,
              [payload.review.id]: payload.review,
            },
          },
        },
      };

    default:
      return state;
  }
};