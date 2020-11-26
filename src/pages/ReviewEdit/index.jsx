import React, { useEffect } from 'react';
import { useParamsInt } from '@app/utils';
import * as Styled from './styles';
import ReviewForm from '@app/components/ReviewForm';
import { useDispatch, useSelector } from 'react-redux';
import { getReview as getReviewFromStore } from '@app/endpoints';
// import { Redirect } from 'react-router-dom';
import { setReview } from '@app/actions/items';
import { getReview } from '@app/selectors/items';



const ReviewEdit = () => {
  const { stepId = 1, itemId, reviewId } = useParamsInt(['stepId', 'itemId', 'reviewId']);
  const review = useSelector(getReview);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!review) {
      console.log('request');
      getReviewFromStore(reviewId)
        .then(respReview => dispatch(setReview(respReview)));
    }
  }, [dispatch, review, reviewId]);

  if (!review) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <div className='container'>
        <ReviewForm stepId={stepId} itemId={itemId} review={review} />
      </div>
    </Styled.Wrapper>
  );
};

export default ReviewEdit;
