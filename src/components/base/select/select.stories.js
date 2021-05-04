import React from 'react'
import SelectComponent from './Select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default {
  title: 'Base/Select',
  component: SelectComponent,
  argTypes: {
    onChange: {
      action: 'selected',
      table: {
        disable: true,
      },
    },
    isClearable: {
      name: 'Is clearable',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },

    isDisabled: {
      name: 'Is disabled',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },

    isLoading: {
      name: 'Is loading',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },

    isSearchable: {
      name: 'Is searchable',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },

    className: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      defaultValue: 'What flavour do you like the most?',
      control: {
        type: 'text',
      },
    },
  },
}

const Select = (args) => (
  <>
    <SelectComponent {...args} options={options} />
    <p style={{ marginTop: '30px' }}>
      For this component we are using &nbsp;
      <a href="https://www.npmjs.com/package/react-select">React Select</a>
    </p>
    <p>
      Please find complete docs <a href="https://react-select.com/home">here</a>
    </p>
  </>
)

export { Select }
