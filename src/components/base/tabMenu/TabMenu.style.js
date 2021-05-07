import styled from 'styled-components'
import theme from 'theme/default'

const WrapperSt = styled.div`
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.1));
  .tabs {
    display: flex;
    margin-left: ${theme.spacer}px;
  }
  .tabLi {
    margin-right: ${theme.spacer / 2}px;
    &:focus-within {
      .tabLabelContent {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .tabLabel {
    display: block;
    .tabLabelContent {
      display: block;
      padding: ${theme.spacer * 2}px ${theme.spacer * 3}px;
      cursor: pointer;
      border-radius: ${theme.radius}px ${theme.radius}px 0 0;
      background-color: ${theme.palette.grey.lighter};
    }
  }
  .tabRadio {
    width: 0;
    height: 0;
    position: absolute;

    &:checked + .tabLabelContent {
      background-color: ${theme.palette.white};
    }
  }

  .tabContent {
    padding: ${theme.spacer * 2}px;
    background-color: ${theme.palette.white};
  }
`

export { WrapperSt }
