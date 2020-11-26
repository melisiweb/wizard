import { styled } from 'linaria/react';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: 1px solid #919D9D;
`;

export const Logo = styled.img`
  width: 145px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #919D9D;
  font-weight: normal;
  padding: var(--medium-space) var(--small-space);
  display: block;

  &.active {
    font-weight: bold;
  }

  &:hover {
    background-color: #919D9D;
    color: white;
  }
`;