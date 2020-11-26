import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: var(--big-space) 0;
`;

export const StyledLink = styled(Link)`
  color: var(--links-color);
  text-decoration: none;
`;