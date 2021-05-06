import styled, { css } from 'styled-components'
import theme from 'theme/default'

const ButtonSC = styled.button`
  align-items: center;
  background-color: ${theme.colorCodes.primary};
  border-radius: ${theme.radius}px;
  border: 1px solid transparent;
  color: ${theme.colorCodes.primary_contrast};
  cursor: pointer;
  display: inline-grid;
  font-family: inherit;
  font-size: 2rem;
  grid-auto-flow: column;
  grid-gap: ${theme.spacer * 2}px;
  ${theme.largeShadow};

  &:hover {
    opacity: 0.9;
  }

  ${({ variation }) =>
    variation === 'secondary' &&
    css`
      background-color: ${theme.palette.white};
      color: ${theme.palette.violet.medium};
      border: 1px solid ${theme.palette.violet.light};
      box-shadow: none;
      &:hover {
        opacity: 1;
        background-color: ${theme.palette.violet.light}11;
      }
    `}

  ${({ variation }) =>
    variation === 'tertiary' &&
    css`
      background-color: ${theme.palette.grey.medium};
      color: ${theme.palette.violet.dark};
      border: 1px solid transparent;
      ${theme.shadow};
      font-size: 1.4rem;
      font-weight: 600;
      &:hover {
        opacity: 1;
        background-color: ${theme.palette.violet.light}11;
      }
    `}


  ${({ variation }) =>
    variation === 'barebone' &&
    css`
      background-color: transparent;
      color: ${theme.palette.violet.medium};
      box-shadow: none;
      &:hover {
        opacity: 1;
        background-color: ${theme.palette.grey.darker}11;
      }
    `}

  ${({ small }) =>
    small
      ? css`
          padding: ${theme.spacer}px ${theme.spacer * 2}px;
        `
      : css`
          padding: ${theme.spacer * 2}px ${theme.spacer * 3}px;
        `}

  
  :disabled {
    background-color: ${theme.palette.grey.light};
    color: ${theme.palette.grey.dark};
  }
`

export default ButtonSC
