import React from 'react'
import SelectComponent from 'react-select'
import theme from 'theme/Default'
import styled from 'styled-components'

const SelectSC = styled(SelectComponent)`
  font-size: 2rem;
  color: ${theme.colorCodes.primary};
  .epr__single-value {
    color: inherit;
  }

  .epr__control {
    min-height: 41px; // magic number, sorry :)
  }

  .epr__control--is-focused,
  .epr__control:hover {
    border-color: ${theme.colorCodes.primary};
    box-shadow: 0 0 0 1px ${theme.colorCodes.primary};
  }

  .epr__option--is-focused,
  .epr__option:hover {
    background-color: ${theme.palette.grey.lighter};
  }

  .epr__option--is-selected,
  .epr__option--is-selected:hover {
    background-color: ${theme.colorCodes.primary};
  }
`

export default (props) => <SelectSC classNamePrefix="epr" {...props} />
