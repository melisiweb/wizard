/**
 * @param {$.MainState} state
 * @returns {$.Items.State}
 */
const getReducer = state => state.items;

/**
 * @param {$.MainState} state
 * @returns {$.Items.List}
 */
export const getList = state => getReducer(state).list;