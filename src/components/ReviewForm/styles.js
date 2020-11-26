import { styled } from 'linaria/react';

export const Wrapper = styled.div`

`;

export const Form = styled.form`
  background-color: #f2f2f2;
  border-radius: var(--border-radius);
  padding: 16px;

  .image-upload-container {
    min-height: var(--min-height);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 80px;

    &.has-file {
      span {
        display: none;
      }

      svg {
        fill: var(--success-color);
      }
    }

    svg {
      width: 80px;
      margin: var(--big-space);
    }
  }


  .form-group {
    &--with-file {
      @media screen and (min-width: 600px) {
        display: flex;

        label:first-child {
          width: 30%;
        }
      }
    }

    input[type="file"] {
      display: none;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    width: 100%;

    &.with-file {
      flex-direction: row;
    }

    input, textarea {
      margin-top: var(--small-space);
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey);
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
    background-color: var(--light-grey);
    top: 20px;
    right: 0;
    left: 100%;
    height: 4px;
    width: 40px;
  }

  &.active {
    background-color: var(--success-color);

    &:after {
      background-color: var(--success-color);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  button {
    margin-left: var(--small-space);
  }
`;

export const Error = styled.div`
  margin-bottom: var(--medium-space);
  color: #fe6c6c;
  padding: var(--small-space);
  border-radius: var(--border-radius);
  background-color: #ffd4d4;
`;

export const Stars = styled.div`
  margin-top: var(--small-space);
`;

export const Star = styled.svg`
  fill: white;
  stroke: var(--light-grey);
  stroke-width: 1px;
  margin-right: var(--small-space);

  &.active {
    fill: #008aed;
    stroke: #008aed;
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: #f2f2f2;
  border-radius: var(--border-radius);
  padding: 16px;
  flex-direction: column-reverse;

  > div {
    flex: 1;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const CardImageContainer = styled.div`
  max-width: 250px;
  margin-right: var(--medium-space);
`;