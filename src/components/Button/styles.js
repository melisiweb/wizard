import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '8px',
  border: 'none',
  color: 'white',
  fontSize: 'bold',
  backgroundColor: '#008aed',
  outline: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#0182de',
  },
};

export const Wrapper = styled.button`
  ${buttonStyle}

  &:disabled {
    cursor: default;
  }

  &.unstyled {
    background-color: transparent;
    padding: 0;
    border: none;
    outline: none;
  }
`;

export const WrapperLink = styled(Link)`
  ${buttonStyle}
`;