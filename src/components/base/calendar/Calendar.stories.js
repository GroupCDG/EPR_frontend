/* eslint-disable react/prop-types */
import React from 'react'
import CalendarComponent from '.'
import Paper from '../paper'

export default {
  title: 'Base/Calendar',
  argTypes: {
    onSelect: {
      action: 'selected',
      table: {
        disable: true,
      },
    },
    from: {
      defaultValue: false,
      name: 'From Today',
      control: {
        type: 'boolean',
      },
    },
  },
}

const Calendar = ({ from, onSelect }) => (
  <Paper>
    <CalendarComponent
      fromDate={from ? new Date() : undefined}
      onSelect={onSelect}
    />
  </Paper>
)

export { Calendar }
