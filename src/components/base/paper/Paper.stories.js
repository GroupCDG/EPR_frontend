import React from 'react'
import PaperComponent from '.'

export default {
  title: 'Base/Paper',
  argTypes: {
    padding: {
      defaultValue: 1,
      control: {
        type: 'range',
        min: 0,
        max: 10,
      },
    },
  },
}

const Paper = (args) => (
  <PaperComponent {...args}>
    <h1>This is just a container for other UI elements...</h1>
  </PaperComponent>
)

export { Paper }
