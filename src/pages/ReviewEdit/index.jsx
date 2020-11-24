import React from 'react';
import { useParamsInt } from '@app/utils';
import * as Styled from './styles';
import ReviewForm from '@app/components/ReviewForm';
import { useSelector } from 'react-redux';
import { getReview } from '@app/selectors/items';



const ReviewEdit = () => {
  const { stepId = 1, itemId } = useParamsInt(['stepId', 'itemId']);
  const review = useSelector(getReview);

  return (
    <Styled.Wrapper>
      <div className='container'>
        <ReviewForm stepId={stepId} itemId={itemId} review={review} />
      </div>
    </Styled.Wrapper>
  );
};

export default ReviewEdit;
