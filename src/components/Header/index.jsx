import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@app/assets/logo.svg';
import * as Styled from './styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      <div className='container flex-center'>
        <Link to='/'>
          <Styled.Logo src={logo} />
        </Link>
        <Styled.Nav>
          <ul>
            <li>
              <Styled.MenuLink to='/items'>Items</Styled.MenuLink>
            </li>
          </ul>
        </Styled.Nav>
      </div>
    </Styled.Wrapper>
  );
};

export default Header;
