import styled from 'styled-components'
import theme from 'theme/Default'

const PaperSC = styled.div`
  border-radius: ${theme.radius}px;
  background-color: ${theme.palette.white};
  ${theme.largeShadow};

  padding: ${({ padding = 2 }) => theme.spacer * padding}px;
`

export default PaperSC
