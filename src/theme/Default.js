import { createGlobalStyle } from 'styled-components'

const palette = {
  violet: {
    dark: '#685F9B',
    medium: '#8B83BA',
    light: '#D9D5EC',
    lighter: '#f6fbff',
  },
  orange: {
    medium: '#E58A00',
    light: '#EEC68B',
  },
  grey: {
    darker: '#444444',
    dark: '#999999',
    medium: '#DEE5E8',
    light: '#EBEBEB',
    lighter: '#F0F3F4',
  },
  white: '#fff',
}

const textSize = {
  h1: '3.6rem',
  h2: '2.4rem',
  h3: '2rem',
  textBody: '1.6rem',
}

const breakPoints = {
  small: 390,
  large: 800,
}

const theme = {
  textSize,
  palette,
  colorCodes: {
    primary: palette.violet.dark,
    primary_contrast: palette.white,
    secondary: palette.violet.medium,
    accent: palette.orange.medium,
  },
  radius: 3,
  spacer: 8,
  breakPoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakPoints.small}px)`,
    large: `@media screen and (min-width: ${breakPoints.large}px)`,
  },
  page: {
    maxWidth: 1280,
    bgColor:
      'linear-gradient(314.6deg,hsl(215deg 18% 80%) 2.53%,#F0F3F4 100%);',
  },
  shadow: 'box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2)',
  largeShadow: 'box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1)',
}

export default theme

export const Typography = createGlobalStyle`  
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${textSize.textBody};
    background: ${theme.page.bgColor};
    color: ${theme.colorCodes.primary};
  }

  h1 {
    font-size: ${textSize.h1};
    color: ${theme.colorCodes.primary};
    font-weight: 200;
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
`
