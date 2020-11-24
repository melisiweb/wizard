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

/**
 * @param {$.MainState} state
 * @returns {$.Items.Item}
 */
export const getCurrent = state => getReducer(state).current;

/**
 * @param {$.MainState} state
 * @returns {$.Reviews.Review}
 */
export const getReview = state => getReducer(state).review;