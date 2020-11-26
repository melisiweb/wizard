import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import ReviewForm from '.';

const mockStore = configureStore();

const review = {
  date: '2020-11-26T08:35:13.723Z',
  description: '',
  id: 422,
  image: { url: 'https://www.abcam.com/ps/products/0/ab290/reviews/images/ab290_35159.png', description: 'Image description text' },
  rating: 3,
  title: 'Test review title',
};

const initialState = {
  list: null,
  current: null,
  review,
};
test('ReviewForm renders', () => {
  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={review} />,
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReviewForm renders', () => {
  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={review} />,
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReviewForm step 1 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={review} />,
    </Provider>,
  );

  const labelTitle = screen.getByText(/Title/i);

  expect(labelTitle).toBeInTheDocument();
});

test('ReviewForm step 2 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={2} itemId={1} review={review} />,
    </Provider>,
  );

  const labelTitle = screen.getByText(/Description/i);

  expect(labelTitle).toBeInTheDocument();
});

test('ReviewForm step 3 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={3} itemId={1} review={review} />,
    </Provider>,
  );

  const textarea = screen.getByDisplayValue(/Image description text/i);
  expect(textarea).toBeInTheDocument();
});


test('ReviewForm step 4 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={4} itemId={1} review={review} />,
    </Provider>,
  );

  const cardImage = screen.getByAltText('review');
  expect(cardImage).toBeInTheDocument();
});