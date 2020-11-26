import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '@selectors/items';
import ItemCard from '@app/components/ItemCard';
import { getItems } from '@app/endpoints';
import { setItemsList } from '@app/actions/items';
import Loading from '@app/components/Loading';

const Items = () => {
  const isMountedRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const itemsList = useSelector(getList);
  const dispatch = useDispatch();
  const getTemplate = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div>There was an error fetching the items</div>;
    }

    if (itemsList) {
      return itemsList.map((item, index) => <ItemCard key={`item_${index}`} item={item} />);
    }

    return null;
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
        <h1>Items</h1>
        <p>Here is a list of items</p>
        {getTemplate()}
      </div>
    </Styled.Wrapper>
  );
};

export default Items;
