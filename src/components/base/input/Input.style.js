import styled from 'styled-components'
import theme from 'theme/Default'

const InputSC = styled.input`
  border-radius: ${theme.radius}px;
  background-color: ${theme.palette.white};
  border: 1px solid ${theme.palette.violet.light};
  color: ${theme.colorCodes.primary};
  font-size: 2rem;
  padding: ${theme.spacer}px ${theme.spacer * 2}px;
  display: inline-block;
  width: 100%;

  &::placeholder {
    font-style: italic;
    font-weight: 200;
    color: ${theme.palette.grey.dark};
  }
`

export default InputSC
