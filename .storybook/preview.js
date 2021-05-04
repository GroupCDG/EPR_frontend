import React from 'react'
import { addDecorator } from '@storybook/react'
import CssBaseline from 'src/theme/baseline'
import { Typography } from 'src/theme/default'

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
