import styled from 'styled-components'
import theme from 'theme/default'

const WrapperSC = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  button {
    position: absolute;
    right: 1px;
    border: none;
    background-color: transparent;
    color: ${theme.colorCodes.secondary};
    padding: ${theme.spacer}px;
    line-height: 1;
    cursor: pointer;
  }
  input {
    padding-right: ${theme.spacer * 4}px;
  }
`

export default WrapperSC
