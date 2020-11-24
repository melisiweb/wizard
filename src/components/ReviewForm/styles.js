import { styled } from 'linaria/react';

export const Wrapper = styled.div`

`;

export const Form = styled.form`
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 16px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    input, textarea {
      margin-top: 8px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  font-size: 24px;
  color: white;
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 50%;
  margin-left: 40px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    &:after {
      display: none
    }
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #ccc;
    top: 20px;
    right: 0;
    left: 100%;
    height: 4px;
    width: 40px;
  }

  &.active {
    background-color: #9acd32;

    &:after {
      background-color: #9acd32;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Stars = styled.div`
  margin-top: 8px;
`;

export const Star = styled.svg`
  fill: white;
  stroke: #ccc;
  stroke-width: 1px;
  margin-right: 8px;

  &.active {
    fill: #008aed;
    stroke: #008aed;
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 16px;

  > div {
    flex: 1;
  }
`;

export const CardImageContainer = styled.div`
  max-width: 250px;
  margin-right: 20px;
`;