import { setReview } from '@app/actions/items';
import { createReview, updateReview } from '@app/endpoints';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import * as Styled from './styles';

const stars = [1, 2, 3, 4, 5];
const steps = [1, 2, 3, 4];

/** @type {React.FC<$.Reviews.ReviewFormProps>} */
const ReviewForm = ({ stepId, itemId, review }) => {
  const history = useHistory();
  const [title, setTitle] = useState(review?.title || '');
  const [rating, setRating] = useState(review?.rating || 1);
  const [description, setDescription] = useState(review?.description || '');
  const [imageUrl] = useState(review?.image?.url || 'https://www.abcam.com/ps/products/0/ab290/reviews/images/ab290_35159.png');
  const [imageDescription, setImageDescription] = useState(review?.image?.description || '');
  const dispatch = useDispatch();
  const isOverview = stepId === 4;
  const stepsTemplate = <Styled.Steps>
    {steps.map(step => <Styled.Step key={`step-${step}`} className={step <= stepId ? 'active' : ''}>{step}</Styled.Step>)}
  </Styled.Steps>;
  const getStarsTemplate = (readOnly = false) => <Styled.Stars>
    {stars.map(index => <Button key={`star_${index}`} disabled={readOnly} type="button" className='unstyled' onClick={() => setRating(index)}>
      <Styled.Star xmlns="http://www.w3.org/2000/svg" className={index <= rating ? 'active' : ''} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </Styled.Star>
    </Button>)}
    <input type='text' name='rating' className='hide' placeholder='Rating' readOnly value={rating} />
  </Styled.Stars>;

  /** @param {$.Reviews.ReviewPayload} reviewResponse  */
  const onSuccess = (reviewResponse) => {
    dispatch(setReview(reviewResponse));
    history.push(`/items/${itemId}/reviews/${reviewResponse.id}/edit/${stepId + 1}`);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    /** @type {$.Reviews.ReviewPayload} */
    const stateReview = {
      id: review?.id,
      title,
      rating,
      description,
      image: {
        url: imageUrl,
        description: imageDescription,
      },
      date: new Date().toISOString(),
    };

    if (!review || !review.id) {
      createReview(stateReview)
        .then(onSuccess);
    } else {
      updateReview(stateReview)
        .then(onSuccess);
    }
  };

  if (isOverview) {
    if (!review) {
      return null;
    }

    return (
      <Styled.Wrapper>
        {stepsTemplate}
        <Styled.Card>
          <Styled.CardImageContainer>
            <img src={review.image.url} alt='review' />
            <p>{review.image.description}</p>
          </Styled.CardImageContainer>
          <div>
            <h3>{review.title}</h3>
            {getStarsTemplate(true)}
            <p>{review.description}</p>
          </div>
        </Styled.Card>
      </Styled.Wrapper>
    );
  }
  return (
    <Styled.Wrapper>
      {stepsTemplate}
      <Styled.Form>
        {stepId === 1 && <>
          <label>
            <span>Title</span>
            <input type='text' name='title' placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)} />
          </label>

          <label>
            <span>Rating</span>
            {getStarsTemplate()}
          </label>
        </>}

        {stepId === 2 && <>
          <label>
            <span>Description</span>
            <textarea placeholder='Description' name='description' onChange={ev => setDescription(ev.target.value)} value={description} />
          </label>
        </>}

        {stepId === 3 && <>
          <label>
            <span>Image</span>
            <input type='text' placeholder='Title' />
          </label>

          <label>
            <span>Description</span>
            <textarea placeholder='Image Description' name='imageDescription' onChange={ev => setImageDescription(ev.target.value)} value={imageDescription} />
          </label>
        </>}

        <Styled.Actions>
          <Button onClick={onSubmit}>Save and Continue</Button>
        </Styled.Actions>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ReviewForm;
