import React from 'react'
import InputComponent from '.'

export default {
  title: 'Base/Input',
  argTypes: {
    placeholder: {
      defaultValue: 'Name',
      control: {
        type: 'text',
      },
    },
  },
}

const Input = (args) => <InputComponent {...args} />

export { Input }
