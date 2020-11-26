import ReviewForm from '@app/components/ReviewForm';
import { getReview } from '@app/selectors/items';
import { useParamsInt } from '@app/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './styles';

const ReviewCreate = () => {
  const { itemId } = useParamsInt(['itemId']);
  const review = useSelector(getReview);

  return (
    <Styled.Wrapper>
      <div className='container'>
        <h1>Create a review</h1>
        <p>Fill the form to create the review!</p>
        <ReviewForm stepId={1} itemId={itemId} review={review}  />
      </div>
    </Styled.Wrapper>
  );
};

export default ReviewCreate;
