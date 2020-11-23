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
      font-family: Century Gothic, Arial, sans-serif;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
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

  ul, li {
    margin: 0;
    list-style: none;
  }
`;