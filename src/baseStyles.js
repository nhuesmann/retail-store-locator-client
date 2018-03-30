import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  @font-face {
    font-family: 'Verlag-Bold';
    src: url('https://cdn.shopify.com/s/files/1/0658/0121/files/Verlag-Bold.otf');
  }

  @font-face {
    font-family: 'Verlag-Book';
    src: url('https://cdn.shopify.com/s/files/1/0658/0121/files/Verlag-Book.otf');
  }

  @font-face {
    font-family: 'Verlag-Light';
    src: url('https://cdn.shopify.com/s/files/1/0658/0121/files/Verlag-Light.otf');
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  p,
  a,
  ol,
  ul,
  li,
  form,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    font: inherit;
    vertical-align: baseline;
    outline: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: 'Verlag-Light', sans-serif;
  }
`;

export default baseStyles;
