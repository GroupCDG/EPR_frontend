import styled from 'styled-components'
import theme from 'theme/default'

const WrapperSt = styled.div`
  tbody {
    .sorted {
      background-color: ${theme.palette.violet.lighter};
      font-weight: 800;
      border-right: 1px solid ${theme.palette.grey.lighter};
    }
    .sortableTD {
      display: block;
      padding: ${theme.spacer * 2}px;
    }
  }

  thead {
    .sortableTH {
      display: flex;
      align-items: center;

      button {
        cursor: pointer;
        align-items: center;
        background-color: transparent;
        border: none;
        color: inherit;
        display: flex;
        font-weight: inherit;
        font-size: inherit;
        padding: ${theme.spacer * 2}px ${theme.spacer}px;
        :hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }

      .colHeading {
        flex-grow: 1;
        svg {
          margin-left: ${theme.spacer}px;
          font-size: 0.8em;
          /* transition: transform 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045); */
        }
      }

      &.ascending {
        .colHeading {
          svg {
            transform: rotateZ(180deg);
          }
        }
      }
    }
  }
`

export { WrapperSt }
