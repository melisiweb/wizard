// @ts-nocheck
import { css } from 'linaria';
import { normalize } from 'polished';

export const globals = css`
  :global() {

   ${normalize()}

    html {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #444;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }


  p {
    line-height: 1.5;
  }

  textarea,
  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    &:focus,
    &:hover {
      border-color: black;
    }
  }

  textarea {
    resize: vertical;
    min-height: 200px;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 974px;
    padding: 0 20px
  }

  .flex-center {
    display: flex;
    align-items: center;
  }

  .hide {
    display: none;
  }

  ul, li {
    margin: 0;
    list-style: none;
  }
`;