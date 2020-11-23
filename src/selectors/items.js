const getReducer = state => state.items;

export const getList = state => getReducer(state).list;