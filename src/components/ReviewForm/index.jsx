import React, { memo, useEffect, useRef, useState } from 'react';
import { setReview } from '@app/actions/items';
import { createReview, updateReview } from '@app/endpoints';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import * as Styled from './styles';

const stars = [1, 2, 3, 4, 5];
const steps = [1, 2, 3, 4];
const imageUploadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.3 486.3" xmlSpace="preserve">
    <path d="M395.5,135.8c-5.2-30.9-20.5-59.1-43.9-80.5c-26-23.8-59.8-36.9-95-36.9c-27.2,0-53.7,7.8-76.4,22.5
			c-18.9,12.2-34.6,28.7-45.7,48.1c-4.8-0.9-9.8-1.4-14.8-1.4c-42.5,0-77.1,34.6-77.1,77.1c0,5.5,0.6,10.8,1.6,16
			C16.7,200.7,0,232.9,0,267.2c0,27.7,10.3,54.6,29.1,75.9c19.3,21.8,44.8,34.7,72,36.2c0.3,0,0.5,0,0.8,0h86
			c7.5,0,13.5-6,13.5-13.5s-6-13.5-13.5-13.5h-85.6C61.4,349.8,27,310.9,27,267.1c0-28.3,15.2-54.7,39.7-69
			c5.7-3.3,8.1-10.2,5.9-16.4c-2-5.4-3-11.1-3-17.2c0-27.6,22.5-50.1,50.1-50.1c5.9,0,11.7,1,17.1,3c6.6,2.4,13.9-0.6,16.9-6.9
			c18.7-39.7,59.1-65.3,103-65.3c59,0,107.7,44.2,113.3,102.8c0.6,6.1,5.2,11,11.2,12c44.5,7.6,78.1,48.7,78.1,95.6
			c0,49.7-39.1,92.9-87.3,96.6h-73.7c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5h74.2c0.3,0,0.6,0,1,0c30.5-2.2,59-16.2,80.2-39.6
			c21.1-23.2,32.6-53,32.6-84C486.2,199.5,447.9,149.6,395.5,135.8z" />
    <path d="M324.2,280c5.3-5.3,5.3-13.8,0-19.1l-71.5-71.5c-2.5-2.5-6-4-9.5-4s-7,1.4-9.5,4l-71.5,71.5c-5.3,5.3-5.3,13.8,0,19.1
			c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l48.5-48.5v222.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V231.5l48.5,48.5
			C310.4,285.3,318.9,285.3,324.2,280z" />
  </svg>
);

/** @type {Object<string, Array<string>>} */
const requiredFields = {
  1: ['title', 'rating'],
  2: ['description'],
};

/**
 * @param {*} state
 * @param {number} stepId
 */
const getFormValidation = (state, stepId) => {
  const stateKeys = Object.keys(state);

  for (let index = 0; index < stateKeys.length; index++) {
    const key = stateKeys[index];
    if (requiredFields[stepId] && requiredFields[stepId].includes(key) && !state[key]) {
      return { isValid: false, message: `Error: ${key} field is required` };
    }
  }

  return { isValid: true, message: '' };
};

/** @type {React.FC<$.Reviews.RatingFieldProps>} */
const RatingField = ({ readOnly, rating, setRating }) => {
  return <Styled.Stars>
    {stars.map(index => <Button key={`star_${index}`} disabled={readOnly} type="button" className='unstyled' onClick={() => setRating(index)}>
      <Styled.Star xmlns="http://www.w3.org/2000/svg" className={index <= rating ? 'active' : ''} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </Styled.Star>
    </Button>)}
    <input type='text' name='rating' className='hide' placeholder='Rating' readOnly value={rating} />
  </Styled.Stars>;
};

/** @type {React.FC<$.Reviews.ReviewFormProps>} */
const ReviewForm = ({ stepId, itemId, review }) => {
  const isMounted = useRef(false);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(/** @type {string|null} */(null));
  const [title, setTitle] = useState(review?.title || '');
  const [rating, setRating] = useState(review?.rating || 0);
  const [description, setDescription] = useState(review?.description || '');
  const [imageUrl] = useState(review?.image?.url || 'https://www.abcam.com/ps/products/0/ab290/reviews/images/ab290_35159.png');
  const [hasFile, setHasFile] = useState(false);
  const [imageDescription, setImageDescription] = useState(review?.image?.description || '');

  const dispatch = useDispatch();
  const stepsTemplate = <Styled.Steps>
    {steps.map(step => <Styled.Step key={`step-${step}`} className={step <= stepId ? 'active' : ''}>{step}</Styled.Step>)}
  </Styled.Steps>;

  /** @param {$.Reviews.ReviewPayload} reviewResponse  */
  const onSuccess = (reviewResponse) => {
    dispatch(setReview(reviewResponse));
    history.push(`/items/${itemId}/reviews/${reviewResponse.id}/edit/${stepId + 1}`);
  };

  /** @param {Event} ev */
  const onGoBack = ev => {
    ev.preventDefault();

    history.goBack();
  };

  const onFinally = () => {
    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  /** @param {Error} error */
  const onError = error => {
    if (isMounted.current) {
      setError(error.message);
    }
  };

  /** @param {Event} ev */
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

    setError(null);

    const formValidation = getFormValidation(stateReview, stepId);

    if (formValidation.isValid) {
      setIsLoading(true);

      const request = !review ? createReview : updateReview;

      request(stateReview)
        .then(onSuccess)
        .catch(onError)
        .finally(onFinally);
    } else {
      setError(formValidation.message);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (stepId === 4) {
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
            <RatingField readOnly rating={rating} setRating={() => null} />
            <p>{review.description}</p>
          </div>
        </Styled.Card>
        <Styled.Actions>
          <Button className='secondary' onClick={onGoBack}>Back to Step {stepId - 1}</Button>
          <Button onClick={() => {
            dispatch(setReview(null));
            history.push('/');
          }}>Go to Home</Button>
        </Styled.Actions>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      {stepsTemplate}
      <Styled.Form>
        {error && <Styled.Error>{error}</Styled.Error>}
        {stepId === 1 && <div className='form-group'>
          <label>
            <span>Title</span>
            <input type='text' name='title' placeholder='Write a title...' value={title} onChange={ev => setTitle(ev.target.value)} />
          </label>

          <label>
            <span>Rating</span>
            <RatingField rating={rating} setRating={setRating} />
          </label>
        </div>}

        {stepId === 2 && <div className='form-group'>
          <label>
            <span>Description</span>
            <textarea placeholder='Write a description...' name='description' onChange={ev => setDescription(ev.target.value)} value={description} />
          </label>
        </div>}

        {stepId === 3 && <div className='form-group form-group--with-file'>
          <label>
            <input type='file' placeholder='Title' onChange={() => setHasFile(true)} />
            <div className={hasFile ? 'image-upload-container has-file' : 'image-upload-container'}>
              {imageUploadIcon}
              <span>Select a file</span>
            </div>
          </label>

          <label>
            <span>Image Description</span>
            <textarea placeholder='Write an image description...' name='imageDescription' onChange={ev => setImageDescription(ev.target.value)} value={imageDescription} />
          </label>
        </div>}

        <Styled.Actions>
          {stepId > 1 && <Button className='secondary' type='button' onClick={onGoBack} disabled={isLoading}>Back to Step {stepId - 1}</Button>}
          <Button type='button' onClick={onSubmit} className={isLoading ? 'is-loading' : ''} disabled={isLoading}>{isLoading ? 'Loading...' : 'Save and Continue'}</Button>
        </Styled.Actions>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default memo(ReviewForm);
