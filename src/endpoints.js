import { itemsList } from './db';

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

      resolve(itemsList);
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

      if (itemsList) {
        resolve(itemsList.find(item => item.id === parseInt(itemId, 10)));
      }

      resolve(null);
    }, delay);
  });
};

/**
 * @param {$.Reviews.ReviewPayload} review
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Reviews.ReviewPayload>}
 */
export const createReview = (review, hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject();
      }

      review.id = Math.floor(Math.random() * 1000) + 1;
      resolve(review);
    }, delay);
  });
};

/**
 * @param {$.Reviews.ReviewPayload} review
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Reviews.ReviewPayload>}
 */
export const updateReview = (review, hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject();
      }

      resolve(review);
    }, delay);
  });
};