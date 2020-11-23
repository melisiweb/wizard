import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

/**
 * @type {React.FC<$.Items.ItemCardProps>}
 */
const ItemCard = (props) => {
  const { item, isDetailView } = props;

  if (!item) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <h2><Link to={`/items/${item.id}`}>{item.title}</Link></h2>
      <p>{isDetailView ? item.description : item.shortDescription}</p>
    </Styled.Wrapper>
  );
};

export default ItemCard;
