import React from 'react'
import PropTypes from 'prop-types'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { WrapperSt, Global } from './Calendar.style'

const Calendar = ({ onSelect }) => {
  function handleSelect(selected) {
    console.log(`You selected ${selected.toLocaleDateString()}.`)
    if (onSelect) onSelect(selected)
  }

  return (
    <WrapperSt>
      <Global />
      <DayPicker mode="single" onSelect={handleSelect} />
    </WrapperSt>
  )
}

Calendar.displayName = 'Calendar'

Calendar.propTypes = {
  onSelect: PropTypes.func.isRequired,
}

export default Calendar
