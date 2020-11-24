import { setCurrentItem } from '@app/actions/items';
import Button from '@app/components/Button';
import ItemCard from '@app/components/ItemCard';
import { getItem } from '@app/endpoints';
import { getCurrent } from '@app/selectors/items';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Styled from './styles';

const ItemDetails = () => {
  const isMountedRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentItem = useSelector(getCurrent);
  const dispatch = useDispatch();

  /** @type {$.Items.ItemParams} */
  const { itemId } = useParams();

  const getTemplate = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>There was an error fetching the items</div>;
    }

    if (currentItem) {
      return <>
        <ItemCard item={currentItem} isDetailView />
        <Button to={`/items/${currentItem.id}/reviews/create`}>Write a review</Button>
      </>;
    }

    return null;
  };

  useEffect(() => {
    isMountedRef.current = true;

    /** @param {$.Items.Item} data */
    const onDataReceived = data => {
      if (isMountedRef.current) {
        dispatch(setCurrentItem(data));
      }
    };

    const onError = () => {
      setError(true);
    };

    const onFinally = () => {
      if (isMountedRef.current) {
        setLoading(false);
      }
    };

    getItem(itemId)
      .then(onDataReceived)
      .catch(onError)
      .finally(onFinally);

    return () => {
      isMountedRef.current = false;
    };
  }, [itemId, dispatch]);

  return (
    <Styled.Wrapper>
      <div className='container'>
        {getTemplate()}
      </div>
    </Styled.Wrapper>
  );
};

export default ItemDetails;
