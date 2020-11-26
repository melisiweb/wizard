// @ts-nocheck
import { css } from 'linaria';
import { normalize } from 'polished';

export const globals = css`
  :global() {
   ${normalize()}

    :root {
      --border-radius: 4px;
      --small-space: 8px;
      --medium-space: 12px;
      --big-space: 20px;
      --min-height: 100px;
      --max-width: 974px;
      --buttons-font-size: 14px;

      --success-color: #9acd32;
      --links-color: #008aed;
      --links-color-hover: #0182de;
      --dark-grey: #444;
      --medium-grey: #999;
      --light-grey: #ccc;
    }

    @media screen and (min-width: 600px) {
      :root {
        --small-space: 8px;
        --medium-space: 20px;
        --big-space: 40px;
        --min-height: 200px;
        --buttons-font-size: 16px;
      }
    }

    html {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: var(--dark-grey);
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
    padding: var(--small-space);
    border: 1px solid var(--light-grey);
    border-radius: 4px;
    outline: none;

    &:focus,
    &:hover {
      border-color: black;
    }
  }

  textarea {
    resize: vertical;
    min-height: var(--min-height);
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width);
    padding: 0 var(--medium-space);
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