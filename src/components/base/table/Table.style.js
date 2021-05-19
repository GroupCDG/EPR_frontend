import styled from 'styled-components'
import theme from 'theme/Default'

const WrapperSt = styled.table`
  background-color: ${theme.palette.grey.lighter};
  border-radius: ${theme.radius}px;
  border-spacing: 0px;
  color: inherit;
  font-size: inherit;
  font-weight: 200;
  width: 100%;

  td {
    padding: 0;
  }

  .defaultTH,
  .defaultTD {
    display: block;
    padding: ${theme.spacer * 2}px;
  }
`
const THeadSt = styled.thead`
  text-align: left;
`

const TBodySt = styled.tbody`
  tr {
    background-color: ${theme.palette.white};

    td {
      border-bottom: 2px solid ${theme.palette.grey.lighter};
    }

    &:last-child {
      td {
        border: none;
      }
    }
  }
`

export { WrapperSt, THeadSt, TBodySt }
