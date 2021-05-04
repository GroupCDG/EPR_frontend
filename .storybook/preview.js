import React from 'react'
import { addDecorator } from '@storybook/react'
import CssBaseline from 'theme/baseline'
import { Typography } from 'theme/default'

addDecorator((storyFn) => {
  return (
    <>
      <CssBaseline Typography={Typography} />
      {storyFn()}
    </>
  )
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
