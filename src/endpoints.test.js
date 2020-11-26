import { createReview, getItem, getItems, updateReview } from './endpoints';

const review = {
  title: 'title',
  description: 'description',
  image: {
    url: 'url',
    description: '',
  },
  rating: 5,
  date: new Date().toISOString(),
};

test('getItems returns a list of items', () => {
  return getItems().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Long title for an item of the review wizard',
        }),
      ]),
    );
  });
});

test('getItems returns an error', () => {
  return getItems(true).catch(data => {
    expect(data).toEqual(
      expect.objectContaining({
        message: 'Error example',
      }),
    );
  });
});

test('getItem returns a single item', () => {
  return getItem('1').then(data => {
    expect(data).toEqual(
      expect.objectContaining({
        id: 1,
      }),
    );
  });
});

test('createReview returns a single review', () => {
  return createReview(review).then(data => {
    expect(data).toHaveProperty('id');
    expect(data).toEqual(
      expect.objectContaining({
        title: review.title,
      }),
    );
  });
});

test('updateReview returns the updated review', () => {
  const updatingReview = { ...review, id: 1 };

  return updateReview(updatingReview).then(data => {
    expect(data).toEqual(
      expect.objectContaining({
        ...updatingReview,
      }),
    );
  });
});