/**
 *
 * @param {$.Items.List} list
 */
export const getIterableList = (list) => {
  if (list) {
    return Object.values(list);
  }

  return [];
};