import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '@selectors/items';
import { getIterableList } from '@app/utils';
import ItemCard from '@app/components/ItemCard';
import { getItems } from '@app/endpoints';
import { setItemsList } from '@app/actions/items';

const Items = () => {
  const isMountedRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const itemsList = useSelector(getList);
  const iterableItems = getIterableList(itemsList);
  const dispatch = useDispatch();
  const getTemplate = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>There was an error fetching the items</div>;
    }

    return iterableItems.map((item, index) => <ItemCard key={`item_${index}`} item={item} />);
  };

  useEffect(() => {
    isMountedRef.current = true;

    /** @param {$.Items.List} data */
    const onDataReceived = data => {
      if (isMountedRef.current) {
        dispatch(setItemsList(data));
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

    getItems()
      .then(onDataReceived)
      .catch(onError)
      .finally(onFinally);

    return () => {
      isMountedRef.current = false;
    };
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <div className="container">
        {getTemplate()}
      </div>
    </Styled.Wrapper>
  );
};

export default Items;
