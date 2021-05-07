import styled, { createGlobalStyle } from 'styled-components'
import theme from 'theme/default'

const Global = createGlobalStyle`
  :root {
    --rdp-cell-size: 40px;
    --rdp-accent-color: ${theme.colorCodes.accent};
    --rdp-background-color: #e7edff;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
  }
`

const WrapperSt = styled.div`
  .rdp {
    font-size: inherit;
  }
  .rdp-day_selected:not([disabled]) {
    font-weight: 600;
  }
`

export { WrapperSt, Global }
