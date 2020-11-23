import React from 'react';
import * as Styled from './styles';
import { useSelector } from 'react-redux';
import { getList } from '@selectors/items';
import { getIterableList } from '@app/utils';

const Items = () => {
  const items = useSelector(getList);
  const iterableItems = getIterableList(items);

  return (
    <Styled.Wrapper>
      <div className="container">
        {iterableItems.map((item, index) => {
          return <div key={`item_${index}`}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>;
        })}
      </div>
    </Styled.Wrapper>
  );
};

export default Items;
