import React from 'react';
import * as Styled from './styles';

/**
 * @type {React.FC<any>}
 */
const Button = (props) => {
  const Wrapper = props.to ? Styled.WrapperLink : Styled.Wrapper;
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Button;
