import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Icon } from 'assets/icons/right_arrow.svg'
import ButtonComponent from '.'

export default {
  title: 'Base/Button',
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
    label: {
      defaultValue: 'Button label',
      control: {
        type: 'text',
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    variation: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'barebone'],
      control: {
        type: 'radio',
      },
    },
    small: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    addIcon: {
      name: 'Add icon',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
}

const Button = ({ addIcon, ...args }) => (
  <ButtonComponent {...args}>
    {args.label} {addIcon && <Icon />}
  </ButtonComponent>
)

Button.propTypes = {
  addIcon: PropTypes.bool,
  variation: PropTypes.string,
}

Button.defaultProps = {
  addIcon: false,
  variation: 'primary',
}

export { Button }
