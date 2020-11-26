import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import ReviewForm from '.';

const mockStore = configureStore();
const initialState = {
  list: null,
  current: null,
  review: null,
};
test('ReviewForm renders', () => {
  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={null} />,
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReviewForm renders', () => {
  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={null} />,
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ReviewForm step 1 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={1} itemId={1} review={null} />,
    </Provider>,
  );

  const labelTitle = screen.getByText(/Title/i);

  expect(labelTitle).toBeInTheDocument();
});

test('ReviewForm step 2 renders', () => {
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ReviewForm stepId={2} itemId={1} review={null} />,
    </Provider>,
  );

  const labelTitle = screen.getByText(/Description/i);

  expect(labelTitle).toBeInTheDocument();
});