/** @type {$.Items.List} */
const items = {
  1: {
    id: 1,
    title: 'Item title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    reviews: {},
  },
};

/**
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Items.List>}
 */
export const getItems = (hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject();
      }

      resolve(items);
    }, delay);
  });
};

/**
 * @param {string} itemId
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Items.Item>}
 */
export const getItem = (itemId, hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject();
      }

      resolve(items[itemId]);
    }, delay);
  });
};