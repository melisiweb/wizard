/** @type {$.Items.List} */
export const itemsList = [
  {
    id: 1,
    title: 'Long title for an item of the review wizard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    reviews: {},
  },
];

export const REVIEW_STORE = 'wizard.review';

/**
 * @param {string} reviewId
 */
export const getReviewFromId = (reviewId) => {
  const reviews = window.localStorage.getItem(REVIEW_STORE);

  if (reviews) {
    const jsonReviews = JSON.parse(reviews);

    if (jsonReviews[reviewId]) {
      return JSON.parse(reviews)[reviewId];
    }
  }

  return null;
};

/**
 * @param {$.Reviews.ReviewPayload} review
 */
export const storeReview = (review) => {
  let newReviews = null;

  if (review?.id) {
    const reviewsStored = window.localStorage.getItem(REVIEW_STORE);
    newReviews = reviewsStored ?
      {
        ...JSON.parse(reviewsStored),
        [review.id]: review,
      } :
      {
        [review.id]: review,
      };
  }

  window.localStorage.setItem(REVIEW_STORE, JSON.stringify(newReviews));
};