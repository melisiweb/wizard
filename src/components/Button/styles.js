import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  padding: 'var(--small-space) 16px',
  borderRadius: 'var(--border-radius)',
  border: 'none',
  color: 'white',
  fontSize: 'bold',
  backgroundColor: 'var(--links-color)',
  outline: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  boxShadow: '1px 1px 1px var(--light-grey)',
  '&:hover': {
    backgroundColor: 'var(--links-color-hover)',
  },
};

export const Wrapper = styled.button`
  ${buttonStyle}
  font-size: var(--buttons-font-size);

  &:disabled {
    cursor: default;
    background-color: var(--medium-grey);
  }

  &.secondary {
    background-color: white;
    color: black;

    &:hover {
      background-color: #fbfbfb;
    }
  }

  &.unstyled {
    background-color: transparent;
    padding: 0;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const WrapperLink = styled(Link)`
  ${buttonStyle}
`;