import { itemsList, getReviewFromId, storeReview } from './db';

/**
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Items.List>}
 */
export const getItems = (hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject(new Error('Error example'));
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
        reject(new Error('Error example'));
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
        reject(new Error('Error example'));
      }

      review.id = Math.floor(Math.random() * 1000) + 1;
      storeReview(review);
      resolve(review);
    }, delay);
  });
};

/**
 * @param {string} reviewId
 * @param {boolean} hasError
 * @param {number} delay
 * @returns {Promise<$.Reviews.ReviewPayload>}
 */
export const getReview = (reviewId, hasError = false, delay = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject(new Error('Error example'));
      }

      const review = getReviewFromId(reviewId);

      if (review) {
        resolve(review);
      }

      reject(new Error('Review not found'));
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
        reject(new Error('Error example'));
      }

      storeReview(review);
      resolve(review);
    }, delay);
  });
};