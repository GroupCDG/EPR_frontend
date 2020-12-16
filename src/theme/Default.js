import { createGlobalStyle } from 'styled-components';

const palette = {
  primary: '#7faae4',
  secondary: '#834db7',
  tertiary: '#34283f',
  grey: {
    medium: '#acaaad',
    light: '#d8d8d8',
  },
};

const textSize = {
  h1: '2.4rem',
  h2: '1.8rem',
  h3: '1.4rem',
  textBody: '1.6rem',
};

const breakPoints = {
  small: 390,
  large: 800,
};

const theme = {
  textSize,
  palette,
  radius: 8,
  spacer: 8,
  breakPoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakPoints.small}px)`,
    large: `@media screen and (min-width: ${breakPoints.large}px)`,
  },
  page: {
    maxWidth: 1024,
    bgColor: palette.grey.light,
  },
  shadow: '0 2px 10px 3px rgba(0, 0, 0, 0.2)',
};

export default theme;

export const Typography = createGlobalStyle`  
  body {
    font-family: "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${textSize.textBody};
    background-color: ${theme.page.bgColor};
  }

  h1 {
    font-size: ${textSize.h1};
    font-weight: bold;
    margin: 0 0 1em;
  }

  h2 {
    font-size: ${textSize.h2};
    font-weight: bold;
    margin: 0 0 1em;
  }

  h3 {
    font-size: ${textSize.h3};
    font-weight: normal;
    margin: 0 0 1em;
  }

  input{
    border: none;
    padding:${theme.spacer * 2}px;
    font-size: inherit;
  }
`;
